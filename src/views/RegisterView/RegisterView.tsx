import React from "react";
import { Register } from "../../components/Register/Register";
import classes from "./RegisterView.module.css";

export const RegisterView = () => {
  return (
    <div className={classes.RegisterView}>
      <Register />
    </div>
  );
};
