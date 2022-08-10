import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./UnauthorizedView.module.css";

export const UnauthorizedView = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.UnauthorizedView}>
      <p>UnauthorizedView</p>
      <p onClick={() => navigate(-1)}>Back</p>
    </div>
  );
};
