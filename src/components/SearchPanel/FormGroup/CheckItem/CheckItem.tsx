import React from "react";
import { Field } from "formik";
import { PrimaryButton } from "../../../buttons/PrimaryButton/PrimaryButton";
import classes from "./CheckItem.module.css";

interface Props {
  type: "checkbox" | "radio";
  value: string;
  groupName: string;
  icon?: "star";
}

export const CheckItem = ({ value, groupName, type, icon }: Props) => {
  return (
    <label className={classes.CheckItem}>
      <Field
        type={type}
        name={groupName}
        value={value}
        className={classes.field}
      />
      <PrimaryButton
        type={type}
        size="small"
        color="secondary"
        icon={icon}
        reversed
      >
        {value}
      </PrimaryButton>
    </label>
  );
};
