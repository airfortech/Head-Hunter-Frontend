import { Field, Form, Formik } from "formik";
import React from "react";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import classes from "./SortForm.module.css";

interface Props {
  field: {
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur: React.ChangeEventHandler<HTMLInputElement>;
  };
  id: string;
  label: string;
  className: string;
}

const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}: Props) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classes.input}
        {...props}
      />
      <label htmlFor={id}>
        <PrimaryButton
          type="radio"
          color={id === value ? "primary" : "secondary"}
          icon="filter"
        >
          {label}
        </PrimaryButton>
      </label>
    </div>
  );
};

export const SortForm = () => {
  return (
    <div className={classes.SortForm}>
      <Formik
        initialValues={{
          picked: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            <Field
              component={RadioButton}
              name="picked"
              id="radioOption1"
              label="Choose this option"
            />
            <Field
              component={RadioButton}
              name="picked"
              id="radioOption2"
              label="Or choose this one"
            />
            <div>Picked: {values.picked}</div>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};
