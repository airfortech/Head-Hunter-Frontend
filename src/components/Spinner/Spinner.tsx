import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import classes from "./Spinner.module.css";

interface Props {
  size?: "normal" | "large";
}

export const Spinner = ({ size }: Props) => {
  return (
    <div className={classes.Spinner}>
      <ClipLoader
        loading
        className={`${classes.loader} ${size ? classes[size] : ""}`}
      />
    </div>
  );
};
