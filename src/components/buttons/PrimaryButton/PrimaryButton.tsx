import React, { MouseEventHandler } from "react";
import classes from "./PrimaryButton.module.css";

interface Props {
  children: string;
  type?: "button" | "submit" | "checkbox" | "radio";
  disabled?: boolean;
  size?: "small" | "normal" | "large" | "form";
  fullWidth?: boolean;
  color?: "primary" | "secondary" | "tertiary" | "quaternary";
  icon?: "filter" | "sort" | "star" | "back" | undefined;
  iconColor?: "primary" | "secondary" | "tertiary";
  reversed?: boolean;
  onClick?: MouseEventHandler;
}

enum Icons {
  filter = "bx bxl-github",
  sort = "bx bx-sort-alt-2",
  star = "bx bxs-star",
  back = "bx bxs-chevron-left",
}

export const PrimaryButton = ({
  children,
  type = "button",
  disabled = false,
  color = "primary",
  size = "normal",
  icon,
  iconColor = "primary",
  fullWidth = false,
  reversed = false,
  onClick,
}: Props) => {
  return type === "button" || type === "submit" ? (
    <button
      type={type}
      disabled={disabled}
      className={`${classes.PrimaryButton} ${classes[size]} ${classes[color]} ${
        fullWidth ? classes.fullWidth : ""
      } ${reversed ? classes.reversed : ""}`}
      onClick={onClick}
    >
      {icon && (
        <i className={`${Icons[icon]} ${classes[iconColor + "Icon"]}`} />
      )}
      {children}
    </button>
  ) : (
    <div
      className={`${classes.PrimaryButton} ${classes[size]} ${classes[color]} ${
        fullWidth ? classes.fullWidth : ""
      } ${reversed ? classes.reversed : ""}`}
      onClick={onClick}
    >
      {icon && (
        <i className={`${Icons[icon]} ${classes[iconColor + "Icon"]}`} />
      )}
      {children}
    </div>
  );
};
