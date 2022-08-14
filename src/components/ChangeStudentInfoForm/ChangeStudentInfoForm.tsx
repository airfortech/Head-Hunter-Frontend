import { Form, Formik } from "formik";
import React from "react";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { CheckItem } from "../SearchPanel/FormGroup/CheckItem/CheckItem";
import { FormGroup } from "../SearchPanel/FormGroup/FormGroup";
import {
  canTakeApprenticeship,
  expectedContractType,
  expectedTypeWork,
  initialInfoValues,
  printValues,
  ValidationSchema,
} from "./ChangeStudentInfoFormData";
import classes from "./ChangeStudentInfoForm.module.css";

export const ChangeStudentInfoForm = () => {
  return (
    <div className={classes.ChangeStudentInfoForm}>
      <Formik
        initialValues={initialInfoValues}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          alert(printValues(values));
        }}
      >
        {({ errors, isValid }) => (
          <Form className={classes.form}>
            <FormGroup title="Nazwa użytkowanika na githubie">
              <Input
                type="text"
                size="medium"
                name="githubUsername"
                forFormik
                placeholder="np. joedeveloper"
              />
            </FormGroup>
            <FormGroup title="Telefon">
              <Input
                type="text"
                size="medium"
                name="tel"
                forFormik
                placeholder="np. +48 333 333 334"
              />
            </FormGroup>
            <FormGroup title="O mnie">
              <TextArea
                size="medium"
                name="bio"
                forFormik
                placeholder="Napisz coś o sobie"
              />
            </FormGroup>
            <FormGroup title="Edukacja">
              <TextArea
                size="medium"
                name="education"
                forFormik
                placeholder="Edukacja"
              />
            </FormGroup>
            <FormGroup title="Docelowe miasto, gdzie chccesz pracować">
              <Input
                type="text"
                size="medium"
                name="targetWorkCity"
                forFormik
                placeholder="np. Warszawa"
              />
            </FormGroup>
            <FormGroup title="Doświadczenie zawodowe">
              <TextArea
                size="medium"
                name="workExperience"
                forFormik
                placeholder="Napis gdzie pracowałeś"
              />
            </FormGroup>
            <FormGroup title="Portfolio">
              <Input
                type="text"
                size="medium"
                name="portfolioUrl1"
                forFormik
                placeholder="np. www.joedeveloper.com"
              />
              <Input
                type="text"
                size="medium"
                name="portfolioUrl2"
                forFormik
                placeholder="np. www.joedeveloper.com"
              />
              <Input
                type="text"
                size="medium"
                name="portfolioUrl3"
                forFormik
                placeholder="np. www.joedeveloper.com"
              />
              <Input
                type="text"
                size="medium"
                name="portfolioUrl4"
                forFormik
                placeholder="np. www.joedeveloper.com"
              />
              <Input
                type="text"
                size="medium"
                name="portfolioUrl5"
                forFormik
                placeholder="np. www.joedeveloper.com"
              />
            </FormGroup>
            <FormGroup title="Projekt na zaliczenie">
              <Input
                type="text"
                size="medium"
                name="projectUrl1"
                forFormik
                placeholder="np. www.joeeproject.com"
              />
              <Input
                type="text"
                size="medium"
                name="projectUrl2"
                forFormik
                placeholder="np. www.joeeproject.com"
              />
              <Input
                type="text"
                size="medium"
                name="projectUrl3"
                forFormik
                placeholder="np. www.joeeproject.com"
              />
              <Input
                type="text"
                size="medium"
                name="projectUrl4"
                forFormik
                placeholder="np. www.joeproject.com"
              />
              <Input
                type="text"
                size="medium"
                name="projectUrl5"
                forFormik
                placeholder="np. www.joeeproject.com"
              />
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
              <PrimaryButton type="submit" size="large" disabled={!isValid}>
                Zmień
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
