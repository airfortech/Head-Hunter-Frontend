import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import logo from "../../assets/images/logo.png";
import classes from "./Register.module.css";

export interface InitialValues {
  password: string;
  confirmPassword: string;
}

const initialValues: InitialValues = {
  password: "",
  confirmPassword: "",
};

const ValidationSchema = yup.object().shape({
  password: yup.string().required("Podaj hasło!"),
  confirmPassword: yup
    .string()
    .required("Powtórz hasło!")
    .oneOf([yup.ref("password")], "Niepoprawne hasło!"),
});

const printValues = (values: InitialValues) => {
  const { password, confirmPassword } = values;
  return `
  password: ${password}
  confirmPassword: ${confirmPassword}
  `;
};

export const Register = () => {
  return (
    <main className={classes.Register}>
      <img src={logo} alt="MegaK Logo" className={classes.logo} />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          console.log(values);
          alert(printValues(values));
        }}
      >
        {({ errors, isValid }) => (
          <Form className={classes.form}>
            <Input
              type="password"
              name="password"
              forFormik
              size="large"
              placeholder="Password"
            />
            <Input
              type="password"
              name="confirmPassword"
              forFormik
              size="large"
              placeholder="Confirm password"
            />
            <p className={classes.error}>
              {errors.password
                ? errors.password
                : errors.confirmPassword
                ? errors.confirmPassword
                : null}
            </p>
            <div className={classes.buttons}>
              <NavLink to="/login" className={classes.link}>
                Zaloguj się
              </NavLink>
              <PrimaryButton
                type="submit"
                disabled={!isValid}
                color="primary"
                size="large"
              >
                Zarejestruj się
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};
