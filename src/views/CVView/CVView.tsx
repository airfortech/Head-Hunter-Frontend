import React from "react";
import { PersonalDetails } from "../../components/PersonalDetails/PersonalDetails";
import { TechDetails } from "../../components/TechDetails/TechDetails";
import classes from "./CVView.module.css";

export const CVView = () => {
  return (
    <div className={classes.CVView}>
      <PersonalDetails />
      <TechDetails />
    </div>
  );
};
