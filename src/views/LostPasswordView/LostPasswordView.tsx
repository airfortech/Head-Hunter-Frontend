import React from "react";
import { LostPassword } from "../../components/LostPassword/LostPassword";
import classes from "./LostPasswordView.module.css";

export const LostPasswordView = () => {
  return (
    <div className={classes.LostPasswordView}>
      <LostPassword />
    </div>
  );
};
