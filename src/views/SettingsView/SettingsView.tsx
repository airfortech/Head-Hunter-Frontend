import React from "react";
import { Back } from "../../components/Back/Back";
import { ChangePasswordForm } from "../../components/ChangePasswordForm/ChangePasswordForm";
import { ChangeStudentInfoForm } from "../../components/ChangeStudentInfoForm/ChangeStudentInfoForm";
import { TechInfo } from "../../components/TechDetails/TechInfo/TechInfo";
import { useAuth } from "../../hooks/useAuth";
import { UserRole } from "../../types";
import classes from "./SettingsView.module.css";

export const SettingsView = () => {
  const { auth } = useAuth();
  return (
    <div className={classes.SettingsView}>
      <Back />
      <TechInfo title="Zmiana hasła" center>
        <ChangePasswordForm />
      </TechInfo>
      {auth.role === UserRole.trainee && (
        <TechInfo title="Zmiana informacji" center>
          <ChangeStudentInfoForm />
        </TechInfo>
      )}
    </div>
  );
};
