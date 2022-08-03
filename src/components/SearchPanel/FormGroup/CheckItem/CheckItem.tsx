import { Field, FieldProps } from "formik";
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
      <Field type={type} name={groupName} value={value}>
        {({ field }: FieldProps) => (
          <>
            <input
              type={type}
              placeholder="Email"
              name={groupName}
              onChange={field.onChange}
              checked={field.checked}
              value={value}
              className={classes.input}
            />
            <PrimaryButton
              type={type}
              size="small"
              color={field.checked ? "primary" : "secondary"}
              icon={icon}
              reversed
            >
              {value}
            </PrimaryButton>
          </>
        )}
      </Field>
    </label>
  );
};
