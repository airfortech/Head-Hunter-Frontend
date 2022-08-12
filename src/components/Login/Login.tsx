// todo write/read login data in storage to work on refresh and delete on logout
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { Spinner } from "../Spinner/Spinner";
import logo from "../../assets/images/logo.png";
import classes from "./Login.module.css";
import { config } from "../../config/config";
import { LoginRequest, LoginResponse } from "../../types";

const initialValues: LoginRequest = {
  email: "",
  password: "",
};

const ValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Niepoprawny adres email!")
    .required("Podaj adres email!"),
  password: yup.string().required("Podaj hasło!"),
});

const fetchLoginData = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch(config.apiUrl + "auth/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [apiError, setApiError] = useState("");
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);

  return (
    <main className={classes.Login}>
      <img src={logo} alt="MegaK Logo" className={classes.logo} />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        validate={() => setApiError("")}
        onSubmit={async (values) => {
          try {
            setIsSpinnerLoading(true);
            const { code, data } = await fetchLoginData(values);
            if (code === 200) {
              const { id, role, token } = data;
              setIsSpinnerLoading(false);
              setAuth({ id, role, token });
              navigate("/");
            }
            if (code === 400) {
              setApiError("Niepoprawny email lub hasło!");
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
              type="text"
              name="email"
              forFormik
              size="large"
              placeholder="E-mail"
            />
            <Input
              type="password"
              name="password"
              forFormik
              size="large"
              placeholder="Password"
            />
            <p className={classes.error}>
              {errors.email
                ? errors.email
                : errors.password
                ? errors.password
                : apiError
                ? apiError
                : null}
            </p>
            <div className={classes.buttons}>
              <NavLink to="/lostpassword" className={classes.link}>
                Zapomniałeś hasła?
              </NavLink>
              <div className={classes.row}>
                {isSpinnerLoading && <Spinner />}
                <PrimaryButton
                  type="submit"
                  disabled={!isValid}
                  color="primary"
                  size="large"
                >
                  Zaloguj się
                </PrimaryButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};
