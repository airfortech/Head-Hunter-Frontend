import React from "react";
import { Back } from "../../components/Back/Back";
import { ChangePasswordForm } from "../../components/ChangePasswordForm/ChangePasswordForm";
import { TechInfo } from "../../components/TechDetails/TechInfo/TechInfo";
import classes from "./SettingsView.module.css";

export const SettingsView = () => {
  return (
    <div className={classes.SettingsView}>
      <Back />
      <TechInfo title="Zmiana hasła" center>
        <ChangePasswordForm />
      </TechInfo>
    </div>
  );
};
