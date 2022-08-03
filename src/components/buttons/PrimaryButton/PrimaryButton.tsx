import React from "react";
import classes from "./PrimaryButton.module.css";

interface Props {
  children: string;
  type?: "button" | "submit" | "checkbox" | "radio";
  size?: "small" | "normal" | "large";
  fullWidth?: boolean;
  color?: "primary" | "secondary" | "tertiary" | "quaternary";
  icon?: "filter" | "sort" | "star" | undefined;
  reversed?: boolean;
}

enum Icons {
  filter = "bx bxl-github",
  sort = "bx bx-sort-alt-2",
  star = "bx bxs-star",
}

export const PrimaryButton = ({
  children,
  type = "button",
  color = "primary",
  size = "normal",
  icon,
  fullWidth = false,
  reversed = false,
}: Props) => {
  return type === "button" || type === "submit" ? (
    <button
      type={type}
      className={`${classes.PrimaryButton} ${classes[size]} ${classes[color]} ${
        fullWidth && classes.fullWidth
      } ${reversed && classes.reversed}`}
    >
      {icon && <i className={Icons[icon]} />}
      {children}
    </button>
  ) : (
    <div
      className={`${classes.PrimaryButton} ${classes[size]} ${classes[color]} ${
        fullWidth && classes.fullWidth
      } ${reversed && classes.reversed}`}
    >
      {icon && <i className={Icons[icon]} />}
      {children}
    </div>
  );
};
