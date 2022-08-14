import React, { MouseEventHandler } from "react";
import classes from "./Button.module.css";

interface Props {
  icon: "prev" | "next";
  disabled: boolean;
  onClick?: MouseEventHandler;
}

enum Icons {
  prev = "bx bx-chevron-left",
  next = "bx bx-chevron-right",
}

export const Button = ({ icon, disabled, onClick }: Props) => {
  return (
    <button className={classes.Button} disabled={disabled} onClick={onClick}>
      <i className={Icons[icon]}></i>
    </button>
  );
};
