import React, { MouseEventHandler } from "react";
import { Form, Formik } from "formik";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import { FormGroup } from "../FormGroup/FormGroup";
import { CheckItem } from "../FormGroup/CheckItem/CheckItem";
import {
  canTakeApprenticeship,
  expectedContractType,
  expectedTypeWork,
  degrees,
  initialValues,
  InitialValues,
} from "./filterFormData";
import classes from "./FilterForm.module.css";
import { Input } from "../../Input/Input";

interface Props {
  closeModal: MouseEventHandler;
}

const printValues = (values: InitialValues) => {
  const {
    courseCompletion,
    courseEngagment,
    projectDegree,
    teamProjectDegree,
    expectedTypeWork,
    expectedContractType,
    canTakeApprenticeship,
  } = values;

  return `
    courseCompletion: ${courseCompletion}
    courseEngagment: ${courseEngagment}
    projectDegree: ${projectDegree}
    teamProjectDegree: ${teamProjectDegree}
    expectedTypeWork: ${expectedTypeWork.join(", ")}
    expectedContractType: ${expectedContractType.join(", ")}
    canTakeApprenticeship: ${canTakeApprenticeship}
  `;
};

export const FilterForm = ({ closeModal }: Props) => {
  return (
    <div className={classes.FilterForm}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);

          alert(printValues(values));
        }}
      >
        {({ resetForm }) => (
          <Form className={classes.form}>
            <div className={classes.row}>
              <h2>Filtrowanie</h2>
              <PrimaryButton
                size="normal"
                color="quaternary"
                onClick={() => resetForm()}
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
              <Input type="text" placeholder="np. 1000zł" />
              <p>Do</p>
              <Input type="text" placeholder="np. 10000zł" />
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
            </FormGroup>
            <div className={classes.bottomButtons}>
              <PrimaryButton
                size="normal"
                color="quaternary"
                onClick={closeModal}
              >
                Anuluj
              </PrimaryButton>
              <PrimaryButton type="submit" onClick={closeModal}>
                Pokaż wyniki
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
