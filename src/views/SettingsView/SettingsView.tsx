import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Back } from "../../components/Back/Back";
import { PrimaryButton } from "../../components/buttons/PrimaryButton/PrimaryButton";
import { Input } from "../../components/Input/Input";
import { TechInfo } from "../../components/TechDetails/TechInfo/TechInfo";
import { Spinner } from "../../components/Spinner/Spinner";
import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  JsonResponseStatus,
} from "../../types";
import { config } from "../../config/config";
import classes from "./SettingsView.module.css";
import { useAuth } from "../../hooks/useAuth";

export interface InitialValues {
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

const initialValues: InitialValues = {
  password: "",
  newPassword: "",
  confirmNewPassword: "",
};

const ValidationSchema = yup.object().shape({
  password: yup.string().required("Podaj aktualne hasło!"),
  newPassword: yup.string().required("Podaj nowe hasło!"),
  confirmNewPassword: yup
    .string()
    .required("Powtórz nowe hasło!")
    .oneOf([yup.ref("newPassword")], "Powtórz poprawnie nowe hasło!")
    .notOneOf([yup.ref("password")], "Nowe hasło musi być inne!"),
});

const fetchChangePassword = async (
  data: ChangePasswordRequest
): Promise<ChangePasswordResponse> => {
  const response = await fetch(config.apiUrl + "auth/changePassword", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const SettingsView = () => {
  const { auth } = useAuth();
  const [apiError, setApiError] = useState("");
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);

  return (
    <div className={classes.SettingsView}>
      <Back />
      <TechInfo title="Zmiana hasła" center>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            validate={() => setApiError("")}
            onSubmit={async (values, { resetForm }) => {
              try {
                setIsSpinnerLoading(true);
                const { message, status } = await fetchChangePassword({
                  id: auth.id,
                  oldPassword: values.password,
                  newPassword: values.newPassword,
                });
                console.log(message, status);

                if (status === JsonResponseStatus.success) {
                  setIsSpinnerLoading(false);
                  setApiError("Ustawiłeś nowe hasło!");
                  resetForm();
                }
                if (message === "New password must be different") {
                  setApiError("Nie możesz ustawić takiego samego hasła!");
                  setIsSpinnerLoading(false);
                }
                if (message === "Bad Password") {
                  setApiError("Podałeś złe aktualne hasło!");
                  setIsSpinnerLoading(false);
                }
              } catch (e) {
                setApiError("Spróbuj później!");
                setIsSpinnerLoading(false);
              }
            }}
          >
            {({ errors, isValid }) => (
              <Form className={classes.form}>
                <Input
                  type="password"
                  name="password"
                  forFormik
                  size="large"
                  placeholder="Aktualne hasło"
                />
                <Input
                  type="password"
                  name="newPassword"
                  forFormik
                  size="large"
                  placeholder="Nowe hasło"
                />
                <Input
                  type="password"
                  name="confirmNewPassword"
                  forFormik
                  size="large"
                  placeholder="Powtórz nowe hasło"
                />
                <p className={classes.error}>
                  {errors.password
                    ? errors.password
                    : errors.newPassword
                    ? errors.newPassword
                    : errors.confirmNewPassword
                    ? errors.confirmNewPassword
                    : apiError
                    ? apiError
                    : null}
                </p>
                <div className={classes.buttons}>
                  <div className={classes.row}>
                    {isSpinnerLoading && <Spinner />}
                    <PrimaryButton
                      type="submit"
                      disabled={!isValid}
                      color="primary"
                      size="large"
                    >
                      Zmień hasło
                    </PrimaryButton>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </TechInfo>
    </div>
  );
};
