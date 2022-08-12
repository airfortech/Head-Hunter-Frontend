import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Back.module.css";

export const Back = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.Back}>
      <button className={classes.button} onClick={() => navigate(-1)}>
        <i className="bx bxs-chevron-left"></i>
        Wróć
      </button>
    </div>
  );
};
