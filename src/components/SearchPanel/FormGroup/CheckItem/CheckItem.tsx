import { Field, FieldProps } from "formik";
import { PrimaryButton } from "../../../buttons/PrimaryButton/PrimaryButton";
import classes from "./CheckItem.module.css";

interface Props {
  type: "checkbox" | "radio";
  value: string;
  name: string;
  groupName: string;
  icon?: "star";
}

export const CheckItem = ({ value, name, groupName, type, icon }: Props) => {
  return (
    <label className={classes.CheckItem}>
      <Field type={type} name={groupName} value={value}>
        {({ field: { onChange, checked } }: FieldProps) => (
          <>
            <input
              type={type}
              name={groupName}
              onChange={onChange}
              checked={checked}
              value={value}
              className={classes.input}
            />
            <PrimaryButton
              type={type}
              size="small"
              color={checked ? "primary" : "secondary"}
              icon={icon}
              reversed
            >
              {name}
            </PrimaryButton>
          </>
        )}
      </Field>
    </label>
  );
};
