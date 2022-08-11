import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import logo from "../../assets/images/logo.png";
import classes from "./Login.module.css";

export interface InitialValues {
  login: string;
  password: string;
}

const initialValues: InitialValues = {
  login: "",
  password: "",
};

const ValidationSchema = yup.object().shape({
  login: yup
    .string()
    .email("Niepoprawny adres email!")
    .required("Podaj adres email!"),
  password: yup.string().required("Podaj hasło!"),
});

const printValues = (values: InitialValues) => {
  const { login, password } = values;
  return `
  login: ${login}
  password: ${password}
  `;
};

export const Login = () => {
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    console.log(apiError);
  }, [apiError]);

  return (
    <main className={classes.Login}>
      <img src={logo} alt="MegaK Logo" className={classes.logo} />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        validate={() => setApiError("")}
        onSubmit={(values) => {
          console.log(values);
          alert(printValues(values));
          setApiError("Niepoprawny email lub hasło!");
        }}
      >
        {({ errors, isValid }) => (
          <Form className={classes.form}>
            <Input
              type="text"
              name="login"
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
              {errors.login
                ? errors.login
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
              <PrimaryButton
                type="submit"
                disabled={!isValid}
                color="primary"
                size="large"
              >
                Zaloguj się
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};
