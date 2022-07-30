import React from "react";
import { Login } from "../../components/Login/Login";
import classes from "./LoginView.module.css";

export const LoginView = () => {
  return (
    <div className={classes.LoginView}>
      <Login />
    </div>
  );
};
