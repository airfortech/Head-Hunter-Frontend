import React from "react";
import { Field, FieldProps } from "formik";
import classes from "./Input.module.css";

interface Props {
  type: "text" | "password" | "email";
  forFormik?: boolean;
  name?: string;
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
  forFormik = false,
  name,
  size = "normal",
  color = "primary",
  icon,
  required = false,
  placeholder,
}: Props) => {
  return (
    <div className={classes.Input}>
      {!forFormik ? (
        <input
          type={type}
          placeholder={placeholder}
          className={`${classes.InputInput} ${classes[size]} ${
            classes[color]
          } ${icon && classes.extendedPadding}`}
          required={required}
        />
      ) : (
        <Field name="monthsOfCommercialExp" type="text">
          {({ field: { onChange, value } }: FieldProps) => (
            <input
              type={type}
              value={value}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              className={`${classes.InputInput} ${classes[size]} ${
                classes[color]
              } ${icon && classes.extendedPadding}`}
              required={required}
            />
          )}
        </Field>
      )}
      {icon && (
        <div className={`${classes[size]} ${classes.icon}`}>
          <i className={Icons[icon]} />
        </div>
      )}
    </div>
  );
};
