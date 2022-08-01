import React from "react";
import classes from "./Input.module.css";

interface Props {
  type: "text" | "password" | "email";
  size?: "normal" | "large";
  color?: "primary" | "secondary" | "tertiary";
  icon?: "search";
  required?: boolean;
  placeholder: string;
}

enum Icons {
  search = "bx bx-search",
}

export const Input = ({
  type,
  size = "normal",
  color = "primary",
  icon,
  required = false,
  placeholder,
}: Props) => {
  return (
    <div className={classes.Input}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${classes.InputInput} ${classes[size]} ${classes[color]} ${
          icon && classes.extendedPadding
        }`}
        required={required}
      />
      {icon && (
        <div className={`${classes[size]} ${classes.icon}`}>
          <i className={Icons[icon]} />
        </div>
      )}
    </div>
  );
};
