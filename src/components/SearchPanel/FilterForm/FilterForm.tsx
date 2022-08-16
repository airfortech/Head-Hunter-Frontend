import React, { MouseEventHandler } from "react";
import { Form, Formik } from "formik";
import { useSearch } from "../../../hooks/useSearch";
import { useCurrentSearchParams } from "../../../hooks/useCurrentSearchParams";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import { FormGroup } from "../FormGroup/FormGroup";
import { CheckItem } from "../FormGroup/CheckItem/CheckItem";
import { Input } from "../../Input/Input";
import { FilterValues, UsersListType } from "../../../types";
import {
  canTakeApprenticeship,
  expectedContractType,
  expectedTypeWork,
  degrees,
  ValidationSchema,
} from "./filterFormData";
import { fetchStudentsList } from "../../../utils/fetchStudentsList";
import { initialFilterValues } from "../../../context/searchProviderData";
import classes from "./FilterForm.module.css";

interface Props {
  closeModal: MouseEventHandler;
  type: UsersListType;
}

const printValues = (values: FilterValues) => {
  const {
    courseCompletion,
    courseEngagment,
    projectDegree,
    teamProjectDegree,
    expectedTypeWork,
    expectedContractType,
    canTakeApprenticeship,
    monthsOfCommercialExp,
    expectedSalaryFrom,
    expectedSalaryTo,
  } = values;

  return `
    courseCompletion: ${courseCompletion}
    courseEngagment: ${courseEngagment}
    projectDegree: ${projectDegree}
    teamProjectDegree: ${teamProjectDegree}
    expectedTypeWork: ${expectedTypeWork.join(", ")}
    expectedContractType: ${expectedContractType.join(", ")}
    canTakeApprenticeship: ${canTakeApprenticeship}
    expectedSalaryFrom: ${expectedSalaryFrom}
    expectedSalaryTo: ${expectedSalaryTo}
    monthsOfCommercialExp: ${monthsOfCommercialExp}
  `;
};

export const FilterForm = ({ type, closeModal }: Props) => {
  const params = useCurrentSearchParams(type);
  const { filterOptions, setFilterOptions } = useSearch();

  return (
    <div className={classes.FilterForm}>
      <Formik
        initialValues={filterOptions[type]}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          setFilterOptions({
            ...filterOptions,
            [type]: {
              ...values,
            },
          });
          fetchStudentsList({
            ...params,
            ...values,
          });
          alert(printValues(values));
        }}
      >
        {({ errors, isValid, resetForm }) => (
          <Form className={classes.form}>
            <div className={classes.row}>
              <h2>Filtrowanie</h2>
              <PrimaryButton
                size="normal"
                color="quaternary"
                fontColor="secondary"
                onClick={() => {
                  setFilterOptions({
                    ...filterOptions,
                    [type]: initialFilterValues,
                  });
                  resetForm({ values: initialFilterValues });
                }}
              >
                Wyczyść wszystkie
              </PrimaryButton>
            </div>
            <FormGroup title="Ocena przejścia kursu">
              {degrees.map(({ value, name }) => (
                <CheckItem
                  type="radio"
                  groupName="courseCompletion"
                  value={value}
                  name={name}
                  icon="star"
                  key={value}
                />
              ))}
            </FormGroup>
            <FormGroup title="Ocena aktywności i zaangażowania na kursie">
              {degrees.map(({ value, name }) => (
                <CheckItem
                  type="radio"
                  groupName="courseEngagment"
                  value={value}
                  name={name}
                  icon="star"
                  key={value}
                />
              ))}
            </FormGroup>
            <FormGroup title="Ocena kodu w projekcie własnym">
              {degrees.map(({ value, name }) => (
                <CheckItem
                  type="radio"
                  groupName="projectDegree"
                  value={value}
                  name={name}
                  icon="star"
                  key={value}
                />
              ))}
            </FormGroup>
            <FormGroup title="Ocena pracy w zespole w Scrum">
              {degrees.map(({ value, name }) => (
                <CheckItem
                  type="radio"
                  groupName="teamProjectDegree"
                  value={value}
                  name={name}
                  icon="star"
                  key={value}
                />
              ))}
            </FormGroup>
            <FormGroup title="Preferowane miejsce pracy">
              {expectedTypeWork.map(({ value, name }) => (
                <CheckItem
                  type="checkbox"
                  groupName="expectedTypeWork"
                  value={value}
                  name={name}
                  key={value}
                />
              ))}
            </FormGroup>
            <FormGroup title="Oczekiwany typ kontraktu">
              {expectedContractType.map(({ value, name }) => (
                <CheckItem
                  type="checkbox"
                  groupName="expectedContractType"
                  value={value}
                  name={name}
                  key={value}
                />
              ))}
            </FormGroup>
            <FormGroup title="Oczekiwane wynagrodzenie miesięczne netto">
              <p>Od</p>
              <Input
                type="text"
                name="expectedSalaryFrom"
                forFormik
                placeholder="np. 1000zł"
              />
              <p>Do</p>
              <Input
                type="text"
                name="expectedSalaryTo"
                forFormik
                placeholder="np. 10.000zł"
              />
              <p className={classes.error}>
                {errors.expectedSalaryFrom
                  ? errors.expectedSalaryFrom
                  : errors.expectedSalaryTo
                  ? errors.expectedSalaryTo
                  : null}
              </p>
            </FormGroup>
            <FormGroup title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek">
              {canTakeApprenticeship.map(({ value, name }) => (
                <CheckItem
                  type="radio"
                  groupName="canTakeApprenticeship"
                  value={value}
                  name={name}
                  key={value}
                />
              ))}
            </FormGroup>
            <FormGroup title="Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu">
              <Input
                type="text"
                name="monthsOfCommercialExp"
                forFormik
                placeholder="0 miesięcy"
              />
              <p className={classes.error}>{errors.monthsOfCommercialExp}</p>
            </FormGroup>
            <div className={classes.bottomButtons}>
              <PrimaryButton
                size="normal"
                color="quaternary"
                fontColor="secondary"
                onClick={closeModal}
              >
                Anuluj
              </PrimaryButton>
              <PrimaryButton
                type="submit"
                fontColor="secondary"
                disabled={!isValid}
                onClick={closeModal}
              >
                Pokaż wyniki
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
