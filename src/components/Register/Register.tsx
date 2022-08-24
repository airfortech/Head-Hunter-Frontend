import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { Spinner } from "../Spinner/Spinner";
import { fetchRegister } from "../../utils/fetchRegister";
import logo from "../../assets/images/logo.png";
import { JsonResponseStatus, RegisterResponseMessage } from "../../types";
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
    .test(
      "len",
      "Hasło musi mieć przynajmniej 6 znaków!",
      (val) => !val || val.length > 5
    )
    .required("Powtórz hasło!")
    .oneOf([yup.ref("password")], "Niepoprawne hasło!"),
});

interface ApiInfo {
  type: "success" | "error";
  message: string;
}

const initialApiInfo: ApiInfo = {
  type: "error",
  message: "",
};

export const Register = () => {
  const [apiInfo, setApiInfo] = useState<ApiInfo>(initialApiInfo);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);
  const { id, registerToken } = useParams();
  const navigate = useNavigate();

  return (
    <main className={classes.Register}>
      <img src={logo} alt="MegaK Logo" className={classes.logo} />
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        validate={() => setApiInfo(initialApiInfo)}
        onSubmit={async ({ password }) => {
          if (!id || !registerToken) return;
          try {
            const { message, status } = await fetchRegister({
              id,
              registerToken,
              password,
            });
            if (status === JsonResponseStatus.success) {
              setIsSpinnerLoading(false);
              setApiInfo({
                type: "success",
                message: "Aktywowałes konto!",
              });
              navigate("/login");
            }
            if (message === RegisterResponseMessage.incorrectToken) {
              setApiInfo({
                type: "error",
                message: "Niewłaściwy token!",
              });
              setIsSpinnerLoading(false);
            }
            if (message === RegisterResponseMessage.userNotFound) {
              setApiInfo({
                type: "error",
                message: "Nie ma takiego użytkownika!",
              });
              setIsSpinnerLoading(false);
            }
            if (message === RegisterResponseMessage.wrongPassword) {
              setApiInfo({
                type: "error",
                message: "Hasło musi mieć przynajmniej 6 znaków!",
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
              placeholder="Password"
            />
            <Input
              type="password"
              name="confirmPassword"
              forFormik
              size="large"
              placeholder="Confirm password"
            />
            <p className={classes.info}>
              {errors.password
                ? errors.password
                : errors.confirmPassword
                ? errors.confirmPassword
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
                  fontColor="secondary"
                  size="large"
                >
                  Zarejestruj się
                </PrimaryButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};
