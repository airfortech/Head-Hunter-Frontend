import React from "react";
import { Form, Formik } from "formik";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import { FormGroup } from "../FormGroup/FormGroup";
import { CheckItem } from "../FormGroup/CheckItem/CheckItem";
import { sortByTypes, sortTypes } from "./sortFormData";
import classes from "./SortForm.module.css";

export const SortForm = () => {
  return (
    <div className={classes.SortForm}>
      <h2>Sortowanie</h2>
      <Formik
        initialValues={{
          sortType: sortTypes[1].value,
          sortByType: sortByTypes[0].value,
        }}
        onSubmit={(values) => alert(values.sortType + ", " + values.sortByType)}
      >
        <Form className={classes.form}>
          <FormGroup title="Sortuj">
            {sortTypes.map(({ value, name }) => (
              <CheckItem
                type="radio"
                groupName="sortType"
                value={value}
                name={name}
                key={value}
              />
            ))}
          </FormGroup>
          <FormGroup title="Sortuj według" displayDirection="column">
            {sortByTypes.map(({ value, name }) => (
              <CheckItem
                type="radio"
                groupName="sortByType"
                value={value}
                name={name}
                key={value}
              />
            ))}
          </FormGroup>
          <PrimaryButton type="submit">Pokaż wyniki</PrimaryButton>
        </Form>
      </Formik>
    </div>
  );
};
