import React from "react";
import classes from "./FormGroup.module.css";

interface Props {
  children: JSX.Element[];
  title: string;
}

export const FormGroup = ({ children, title }: Props) => {
  return (
    <div className={classes.FormGroup} role="group">
      <h3>{title}</h3>
      <div className={classes.items}>{children}</div>
    </div>
  );
};
