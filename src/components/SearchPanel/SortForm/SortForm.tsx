import React, { MouseEventHandler } from "react";
import { Form, Formik } from "formik";
import { useCurrentSearchParams } from "../../../hooks/useCurrentSearchParams";
import { useSearch } from "../../../hooks/useSearch";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import { FormGroup } from "../FormGroup/FormGroup";
import { CheckItem } from "../FormGroup/CheckItem/CheckItem";
import { fetchStudentsList } from "../../../utils/fetchStudentsList";
import { sortByTypes, sortTypes } from "./sortFormData";
import { UsersListType } from "../../../types";
import classes from "./SortForm.module.css";

interface Props {
  closeModal: MouseEventHandler;
  type: UsersListType;
}

export const SortForm = ({ type, closeModal }: Props) => {
  const params = useCurrentSearchParams(type);
  const { sortOptions, setSortOptions } = useSearch();

  return (
    <div className={classes.SortForm}>
      <div className={classes.row}>
        <h2>Sortowanie</h2>
        <PrimaryButton
          size="normal"
          color="quaternary"
          fontColor="secondary"
          onClick={closeModal}
        >
          Anuluj
        </PrimaryButton>
      </div>
      <Formik
        initialValues={sortOptions[type]}
        onSubmit={({ sortType, sortByType }) => {
          const newSortOptions = sortOptions;
          newSortOptions[type] = {
            sortType,
            sortByType,
          };
          setSortOptions({
            ...sortOptions,
            [type]: {
              sortType,
              sortByType,
            },
          });
          fetchStudentsList({ ...params, sortType, sortByType });
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
            <PrimaryButton
              type="submit"
              fontColor="secondary"
              onClick={closeModal}
            >
              Pokaż wyniki
            </PrimaryButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
