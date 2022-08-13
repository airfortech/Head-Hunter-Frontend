import React, { MouseEventHandler } from "react";
import { Form, Formik } from "formik";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import { FormGroup } from "../FormGroup/FormGroup";
import { CheckItem } from "../FormGroup/CheckItem/CheckItem";
import { sortByTypes, sortTypes } from "./sortFormData";
import classes from "./SortForm.module.css";
import { useSearch } from "../../../hooks/useSearch";

interface Props {
  closeModal: MouseEventHandler;
  type:
    | "adminHR"
    | "adminStudent"
    | "adminStudentAvailable"
    | "adminStudentToTalk"
    | "adminStudentHired"
    | "hrStudentAvailable"
    | "hrStudentToTalk"
    | "hrStudentHired";
}

export const SortForm = ({ type, closeModal }: Props) => {
  const { sortOptions, setSortOptions } = useSearch();

  return (
    <div className={classes.SortForm}>
      <div className={classes.row}>
        <h2>Sortowanie</h2>
        <PrimaryButton size="normal" color="quaternary" onClick={closeModal}>
          Anuluj
        </PrimaryButton>
      </div>
      <Formik
        initialValues={{
          sortType: sortOptions[type].sortType,
          sortByType: sortOptions[type].sortByType,
        }}
        onSubmit={(values) => {
          const newSortOptions = sortOptions;
          newSortOptions[type] = {
            sortType: values.sortType,
            sortByType: values.sortByType,
          };
          setSortOptions(newSortOptions);
          alert(values.sortType + ", " + values.sortByType);
        }}
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
          <div className={classes.submit}>
            <PrimaryButton type="submit" onClick={closeModal}>
              Pokaż wyniki
            </PrimaryButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
