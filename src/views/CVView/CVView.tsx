import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Back } from "../../components/Back/Back";
import { PersonalDetails } from "../../components/PersonalDetails/PersonalDetails";
import { TechDetails } from "../../components/TechDetails/TechDetails";
import classes from "./CVView.module.css";

export const CVView = () => {
  const { auth } = useAuth();
  return (
    <div className={classes.CVView}>
      {!auth.role && <Back />}
      <div className={classes.row}>
        <PersonalDetails />
        <TechDetails />
      </div>
    </div>
  );
};
