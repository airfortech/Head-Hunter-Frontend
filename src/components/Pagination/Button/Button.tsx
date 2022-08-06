import React from "react";
import classes from "./Button.module.css";

interface Props {
  icon: "prev" | "next";
}

enum Icons {
  prev = "bx bx-chevron-left",
  next = "bx bx-chevron-right",
}

export const Button = ({ icon }: Props) => {
  return (
    <button className={classes.Button}>
      <i className={Icons[icon]}></i>
    </button>
  );
};
