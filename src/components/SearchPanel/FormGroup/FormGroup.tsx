import React from "react";
import classes from "./FormGroup.module.css";

interface Props {
  children: JSX.Element[];
  title: string;
  displayDirection?: "row" | "column";
}

export const FormGroup = ({
  children,
  title,
  displayDirection = "row",
}: Props) => {
  return (
    <div className={classes.FormGroup} role="group">
      <h3>{title}</h3>
      <div
        className={`${classes.items} ${
          displayDirection === "column" && classes.displayColumn
        }`}
      >
        {children}
      </div>
    </div>
  );
};
