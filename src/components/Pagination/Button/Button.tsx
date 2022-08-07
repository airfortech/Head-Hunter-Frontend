import React from "react";
import classes from "./Button.module.css";

interface Props {
  icon: "prev" | "next";
  disabled: boolean;
}

enum Icons {
  prev = "bx bx-chevron-left",
  next = "bx bx-chevron-right",
}

export const Button = ({ icon, disabled }: Props) => {
  return (
    <button className={classes.Button} disabled={disabled}>
      <i className={Icons[icon]}></i>
    </button>
  );
};
