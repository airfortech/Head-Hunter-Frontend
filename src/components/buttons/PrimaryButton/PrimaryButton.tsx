import React from "react";
import classes from "./PrimaryButton.module.css";

interface Props {
  children: string;
  type?: "button" | "submit" | "checkbox" | "radio";
  size?: "small" | "normal" | "large";
  fullWidth?: boolean;
  color?: "primary" | "secondary" | "tertiary" | "quaternary";
  icon?: "filter" | "sort";
}

enum Icons {
  filter = "bx bxl-github",
  sort = "bx bx-sort-alt-2",
}

export const PrimaryButton = ({
  children,
  type = "button",
  color = "primary",
  size = "normal",
  icon,
  fullWidth = false,
}: Props) => {
  return type === "button" || type === "submit" ? (
    <button
      type={type}
      className={`${classes.PrimaryButton} ${classes[size]} ${classes[color]} ${
        fullWidth && classes.fullWidth
      }`}
    >
      {icon && <i className={Icons[icon]} />}
      {children}
    </button>
  ) : (
    <div
      className={`${classes.PrimaryButton} ${classes[size]} ${classes[color]} ${
        fullWidth && classes.fullWidth
      }`}
    >
      {icon && <i className={Icons[icon]} />}
      {children}
    </div>
  );
};
