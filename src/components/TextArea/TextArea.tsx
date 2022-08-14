import React from "react";
import { Field, FieldProps } from "formik";
import classes from "./TextArea.module.css";

interface Props {
  forFormik?: boolean;
  name?: string;
  size?: "normal" | "medium" | "large";
  fullWidth?: boolean;
  color?: "primary" | "secondary" | "tertiary";
  required?: boolean;
  placeholder: string;
}

export const TextArea = ({
  forFormik = false,
  name,
  size = "normal",
  fullWidth = false,
  color = "primary",
  required = false,
  placeholder,
}: Props) => {
  return (
    <div className={classes.TextArea}>
      {!forFormik ? (
        <textarea
          placeholder={placeholder}
          className={`${classes.TextAreaField} ${classes[size]} ${
            classes[color]
          } ${fullWidth ? classes.fullWidth : ""}`}
          required={required}
          autoComplete="off"
        />
      ) : (
        <Field name={name} type="text">
          {({ field: { onChange, value } }: FieldProps) => (
            <textarea
              value={value}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              className={`${classes.TextAreaField} ${classes[size]} ${
                classes[color]
              } ${fullWidth ? classes.fullWidth : ""}`}
              required={required}
              autoComplete="off"
            />
          )}
        </Field>
      )}
    </div>
  );
};
