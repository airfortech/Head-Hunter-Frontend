import React from "react";
import { useNavigate } from "react-router-dom";
import { PersonalDetails } from "../../components/PersonalDetails/PersonalDetails";
import { TechDetails } from "../../components/TechDetails/TechDetails";
import classes from "./CVView.module.css";

export const CVView = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.CVView}>
      <button className={classes.back} onClick={() => navigate(-1)}>
        <i className="bx bxs-chevron-left"></i>
        Wróć
      </button>
      <div className={classes.row}>
        <PersonalDetails />
        <TechDetails />
      </div>
    </div>
  );
};
