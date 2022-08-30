import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { Spinner } from "../Spinner/Spinner";
import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  ChangePasswordResponseMessage,
  JsonResponseStatus,
} from "../../types";
import { config } from "../../config/config";
import classes from "./ChangePasswordForm.module.css";

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

interface ApiInfo {
  type: "success" | "error";
  message: string;
}

const initialApiInfo: ApiInfo = {
  type: "error",
  message: "",
};

export const ChangePasswordForm = () => {
  const { auth } = useAuth();
  const [apiInfo, setApiInfo] = useState<ApiInfo>(initialApiInfo);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);

  return (
    <div className={classes.ChangePasswordForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        validate={() => setApiInfo(initialApiInfo)}
        onSubmit={async (values, { resetForm }) => {
          try {
            setIsSpinnerLoading(true);
            const { message, status } = await fetchChangePassword({
              id: auth.id,
              oldPassword: values.password,
              newPassword: values.newPassword,
            });
            if (status === JsonResponseStatus.success) {
              setIsSpinnerLoading(false);
              setApiInfo({
                type: "success",
                message: "Ustawiłeś nowe hasło!",
              });
              resetForm();
            }
            if (message === ChangePasswordResponseMessage.passwordIsTheSame) {
              setApiInfo({
                type: "error",
                message: "Nie możesz ustawić takiego samego hasła!",
              });
              setIsSpinnerLoading(false);
            }
            if (message === ChangePasswordResponseMessage.incorrectPassword) {
              setApiInfo({
                type: "error",
                message: "Podałeś złe aktualne hasło!",
              });
              setIsSpinnerLoading(false);
            }
            if (message === ChangePasswordResponseMessage.cantChangePassword) {
              setApiInfo({
                type: "error",
                message:
                  "Nie możesz zmienić hasła tego użytkownika w wersji demo!",
              });
              setIsSpinnerLoading(false);
            }
          } catch (e) {
            setApiInfo({
              type: "error",
              message: "Spróbuj później!",
            });
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
              fullWidth
              placeholder="Aktualne hasło"
            />
            <Input
              type="password"
              name="newPassword"
              forFormik
              size="large"
              fullWidth
              placeholder="Nowe hasło"
            />
            <Input
              type="password"
              name="confirmNewPassword"
              forFormik
              size="large"
              fullWidth
              placeholder="Powtórz nowe hasło"
            />
            <p
              className={`${classes.info} ${
                apiInfo.type === "success" && classes.success
              }`}
            >
              {errors.password
                ? errors.password
                : errors.newPassword
                ? errors.newPassword
                : errors.confirmNewPassword
                ? errors.confirmNewPassword
                : apiInfo.message
                ? apiInfo.message
                : null}
            </p>
            <div className={classes.buttons}>
              <div className={classes.row}>
                {isSpinnerLoading && <Spinner />}
                <PrimaryButton
                  type="submit"
                  disabled={!isValid}
                  color="primary"
                  fontColor="secondary"
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
  );
};
