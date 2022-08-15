import React from "react";
import { Spinner } from "../Spinner/Spinner";
import classes from "./PageLoader.module.css";

export const PageLoader = () => {
  return (
    <div className={classes.PageLoader}>
      <Spinner size="large" />
    </div>
  );
};
