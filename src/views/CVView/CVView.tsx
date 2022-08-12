import React from "react";
import { Back } from "../../components/Back/Back";
import { PersonalDetails } from "../../components/PersonalDetails/PersonalDetails";
import { TechDetails } from "../../components/TechDetails/TechDetails";
import classes from "./CVView.module.css";

export const CVView = () => {
  return (
    <div className={classes.CVView}>
      <Back />
      <div className={classes.row}>
        <PersonalDetails />
        <TechDetails />
      </div>
    </div>
  );
};
