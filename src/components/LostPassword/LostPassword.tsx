import {
  LostPasswordRequest,
  LostPasswordResponse,
  LostPasswordResponseMessage,
} from "../../types";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { NavLink } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { config } from "../../config/config";
import logo from "../../assets/images/logo.png";
import classes from "./LostPassword.module.css";

export interface InitialValues {
  email: string;
}

const initialValues: InitialValues = {
  email: "",
};

const ValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Niepoprawny adres email!")
    .required("Podaj adres email!"),
});

const fetchLostPassword = async (
  data: LostPasswordRequest
): Promise<LostPasswordResponse> => {
  const response = await fetch(config.apiUrl + "auth/forgotPassword", {
    method: "POST",
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

export const LostPassword = () => {
  const [apiInfo, setApiInfo] = useState<ApiInfo>(initialApiInfo);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);

  return (
    <main className={classes.LostPassword}>
      <img src={logo} alt="MegaK Logo" className={classes.logo} />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={async ({ email }) => {
          console.log(email);
          try {
            setIsSpinnerLoading(true);
            const { message } = await fetchLostPassword({
              email,
            });
            if (message === LostPasswordResponseMessage.incorrectEmail) {
              setApiInfo({
                type: "error",
                message: "Podaj właściwy adres email!",
              });
              setIsSpinnerLoading(false);
            }
            if (
              message === LostPasswordResponseMessage.userWithThatEmailNotExist
            ) {
              setApiInfo({
                type: "error",
                message: "Email nie istnieje w bazie!",
              });
              setIsSpinnerLoading(false);
            }
            if (message === LostPasswordResponseMessage.success) {
              setApiInfo({
                type: "success",
                message: "Nowe hasło zostało wysłane na podany email!",
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
              type="email"
              name="email"
              forFormik
              size="large"
              placeholder="Email"
            />
            <p
              className={`${classes.info} ${
                apiInfo.type === "success" && classes.success
              }`}
            >
              {errors.email
                ? errors.email
                : apiInfo.message
                ? apiInfo.message
                : null}
            </p>
            <div className={classes.buttons}>
              <NavLink to="/login" className={classes.link}>
                Zaloguj się
              </NavLink>
              <div className={classes.row}>
                {isSpinnerLoading && <Spinner />}
                <PrimaryButton
                  type="submit"
                  disabled={!isValid}
                  color="primary"
                  size="large"
                >
                  Odzyskaj hasło
                </PrimaryButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};
