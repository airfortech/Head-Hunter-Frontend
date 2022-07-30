import React from "react";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "./Input/Input";
import logo from "../../assets/images/logo.png";
import classes from "./Login.module.css";

export const Login = () => {
  return (
    <main className={classes.Login}>
      <img src={logo} alt="MegaK Logo" className={classes.logo} />
      <form className={classes.form}>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />
        <div className={classes.buttons}>
          <p className={classes.link}>Zapomniałeś hasła?</p>
          <PrimaryButton type="submit" color="primary" size="large">
            Zaloguj się
          </PrimaryButton>
        </div>
      </form>
    </main>
  );
};
