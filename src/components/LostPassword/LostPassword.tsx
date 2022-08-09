import React from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import logo from "../../assets/images/logo.png";
import classes from "./LostPassword.module.css";
import { NavLink } from "react-router-dom";

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

const printValues = (values: InitialValues) => {
  const { email } = values;
  return `
  email: ${email}
  `;
};

export const LostPassword = () => {
  return (
    <main className={classes.LostPassword}>
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
              type="email"
              name="email"
              forFormik
              size="large"
              placeholder="Email"
            />
            <p className={classes.error}>{errors.email}</p>
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
                Odzyskaj hasło
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};
