import React from "react";
import { Field, FieldProps } from "formik";
import classes from "./TextArea.module.css";

interface Props {
  forFormik?: boolean;
  name?: string;
  size?: "normal" | "medium" | "large";
  color?: "primary" | "secondary" | "tertiary";
  required?: boolean;
  placeholder: string;
}

export const TextArea = ({
  forFormik = false,
  name,
  size = "normal",
  color = "primary",
  required = false,
  placeholder,
}: Props) => {
  return (
    <div className={classes.TextArea}>
      {!forFormik ? (
        <textarea
          placeholder={placeholder}
          className={`${classes.TextAreaField} ${classes[size]} ${classes[color]}`}
          required={required}
          autoComplete="off"
        ></textarea>
      ) : (
        <Field name={name} type="text">
          {({ field: { onChange, value } }: FieldProps) => (
            <textarea
              value={value}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
              className={`${classes.TextAreaField} ${classes[size]} ${classes[color]}`}
              required={required}
              autoComplete="off"
            ></textarea>
          )}
        </Field>
      )}
    </div>
  );
};
