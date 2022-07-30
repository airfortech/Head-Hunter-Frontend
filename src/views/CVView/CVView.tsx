import React from "react";
import { Header } from "../../components/Header/Header";
import { PersonalDetails } from "../../components/PersonalDetails/PersonalDetails";
import { TechDetails } from "../../components/TechDetails/TechDetails";
import classes from "./CVView.module.css";

export const CVView = () => {
  return (
    <div className={classes.CVView}>
      <Header />
      <div className={classes.wrapper}>
        <PersonalDetails />
        <TechDetails />
      </div>
    </div>
  );
};
