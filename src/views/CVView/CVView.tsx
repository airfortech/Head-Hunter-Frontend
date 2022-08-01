import React from "react";
import { PanelLayout } from "../../Layouts/PanelLayout/PanelLayout";
import { PersonalDetails } from "../../components/PersonalDetails/PersonalDetails";
import { TechDetails } from "../../components/TechDetails/TechDetails";
import classes from "./CVView.module.css";

export const CVView = () => {
  return (
    <PanelLayout>
      <div className={classes.CVView}>
        <PersonalDetails />
        <TechDetails />
      </div>
    </PanelLayout>
  );
};
