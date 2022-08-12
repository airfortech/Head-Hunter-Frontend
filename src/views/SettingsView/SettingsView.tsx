import React from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Back } from "../../components/Back/Back";
import { PrimaryButton } from "../../components/buttons/PrimaryButton/PrimaryButton";
import { Input } from "../../components/Input/Input";
import { TechInfo } from "../../components/TechDetails/TechInfo/TechInfo";
import classes from "./SettingsView.module.css";

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
    .oneOf([yup.ref("newPassword")], "Niepoprawne nowe hasło!"),
});

const printValues = (values: InitialValues) => {
  const { password, newPassword, confirmNewPassword } = values;
  return `
  password: ${password}
  newPassword: ${newPassword}
  confirmNewPassword: ${confirmNewPassword}
  `;
};

export const SettingsView = () => {
  return (
    <div className={classes.SettingsView}>
      <Back />
      <TechInfo title="Zmiana hasła" center>
        <div>
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
                    : null}
                </p>
                <div className={classes.buttons}>
                  <PrimaryButton
                    type="submit"
                    disabled={!isValid}
                    color="primary"
                    size="large"
                  >
                    Zmień hasło
                  </PrimaryButton>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </TechInfo>
    </div>
  );
};
