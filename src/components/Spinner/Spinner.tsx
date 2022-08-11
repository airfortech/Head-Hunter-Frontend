import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import classes from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={classes.Spinner}>
      <ClipLoader loading className={classes.loader} />
    </div>
  );
};
