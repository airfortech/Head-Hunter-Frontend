import {
  GetTraineeProfileResponseMessage,
  TraineeProfileRequest,
  UserRole,
} from "../../types";
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useAuth } from "../../hooks/useAuth";
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
import { fetchGetTraineeProfile } from "../../utils/fetchGetTraineeProfile";
import { convertStudentInfoForEditing } from "../../utils/convertStudentInfo";
import classes from "./ChangeStudentInfoForm.module.css";

export const ChangeStudentInfoForm = () => {
  const { auth } = useAuth();
  const [traineeInfo, setTraineeInfo] =
    useState<TraineeProfileRequest>(initialInfoValues);

  console.log(auth.role, auth.id, traineeInfo);

  useEffect(() => {
    (async () => {
      if (auth.role === UserRole.trainee) {
        const { data, message } = await fetchGetTraineeProfile({
          id: auth.id,
        });
        if (message === GetTraineeProfileResponseMessage.success)
          setTraineeInfo(convertStudentInfoForEditing(data.traineeProfile));
        console.log(convertStudentInfoForEditing(data.traineeProfile));
      }
    })();
  }, []);

  return (
    <div className={classes.ChangeStudentInfoForm}>
      <Formik
        enableReinitialize
        initialValues={traineeInfo}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          alert(printValues(values));
        }}
      >
        {({ errors, isValid }) => (
          <Form className={classes.form}>
            <FormGroup title="Imię">
              <Input
                type="text"
                size="medium"
                fullWidth
                name="firstName"
                forFormik
                placeholder="np. Joe"
              />
            </FormGroup>
            <FormGroup title="Nazwisko">
              <Input
                type="text"
                size="medium"
                fullWidth
                name="lastName"
                forFormik
                placeholder="np. Doe"
              />
            </FormGroup>
            <FormGroup title="Nazwa użytkowanika na githubie">
              <Input
                type="text"
                size="medium"
                fullWidth
                name="githubUsername"
                forFormik
                placeholder="np. joedeveloper"
              />
            </FormGroup>
            <FormGroup title="Telefon">
              <Input
                type="text"
                size="medium"
                fullWidth
                name="tel"
                forFormik
                placeholder="np. +48 333 333 334"
              />
            </FormGroup>
            <FormGroup title="O mnie">
              <TextArea
                size="medium"
                fullWidth
                name="bio"
                forFormik
                placeholder="Napisz coś o sobie"
              />
            </FormGroup>
            <FormGroup title="Edukacja">
              <TextArea
                size="medium"
                fullWidth
                name="education"
                forFormik
                placeholder="Edukacja"
              />
            </FormGroup>
            <FormGroup title="Kursy">
              <TextArea
                size="medium"
                fullWidth
                name="courses"
                forFormik
                placeholder="Napisz jakie kursy odbyłeś"
              />
            </FormGroup>
            <FormGroup title="Docelowe miasto, gdzie chccesz pracować">
              <Input
                type="text"
                size="medium"
                fullWidth
                name="targetWorkCity"
                forFormik
                placeholder="np. Warszawa"
              />
            </FormGroup>
            <FormGroup title="Doświadczenie zawodowe">
              <TextArea
                size="medium"
                fullWidth
                name="workExperience"
                forFormik
                placeholder="Napisz gdzie pracowałeś"
              />
            </FormGroup>
            <FormGroup title="Portfolio">
              <Input
                type="text"
                size="medium"
                fullWidth
                name="portfolioUrl1"
                forFormik
                placeholder="np. www.joedeveloper.com"
              />
              <Input
                type="text"
                size="medium"
                fullWidth
                name="portfolioUrl2"
                forFormik
                placeholder="np. www.joedeveloper.com"
              />
              <Input
                type="text"
                size="medium"
                fullWidth
                name="portfolioUrl3"
                forFormik
                placeholder="np. www.joedeveloper.com"
              />
              <Input
                type="text"
                size="medium"
                fullWidth
                name="portfolioUrl4"
                forFormik
                placeholder="np. www.joedeveloper.com"
              />
              <Input
                type="text"
                size="medium"
                fullWidth
                name="portfolioUrl5"
                forFormik
                placeholder="np. www.joedeveloper.com"
              />
            </FormGroup>
            <FormGroup title="Projekt na zaliczenie">
              <Input
                type="text"
                size="medium"
                fullWidth
                name="projectUrl1"
                forFormik
                placeholder="np. www.joeeproject.com"
              />
              <Input
                type="text"
                size="medium"
                fullWidth
                name="projectUrl2"
                forFormik
                placeholder="np. www.joeeproject.com"
              />
              <Input
                type="text"
                size="medium"
                fullWidth
                name="projectUrl3"
                forFormik
                placeholder="np. www.joeeproject.com"
              />
              <Input
                type="text"
                size="medium"
                fullWidth
                name="projectUrl4"
                forFormik
                placeholder="np. www.joeproject.com"
              />
              <Input
                type="text"
                size="medium"
                fullWidth
                name="projectUrl5"
                forFormik
                placeholder="np. www.joeeproject.com"
              />
            </FormGroup>
            <FormGroup title="Preferowane miejsce pracy">
              {expectedTypeWork.map(({ value, name }) => (
                <CheckItem
                  type="checkbox"
                  size="normal"
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
                  size="normal"
                  groupName="expectedContractType"
                  value={value}
                  name={name}
                  key={value}
                />
              ))}
            </FormGroup>
            <FormGroup title="Oczekiwane wynagrodzenie miesięczne netto">
              <Input
                type="text"
                size="medium"
                name="expectedSalary"
                forFormik
                placeholder="np. 10.000zł"
              />
              <p className={classes.error}>{errors.expectedSalary}</p>
            </FormGroup>
            <FormGroup title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek">
              {canTakeApprenticeship.map(({ value, name }) => (
                <CheckItem
                  type="radio"
                  size="normal"
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
                size="medium"
                name="monthsOfCommercialExp"
                forFormik
                placeholder="0 miesięcy"
              />
              <p className={classes.error}>{errors.monthsOfCommercialExp}</p>
            </FormGroup>
            <div className={classes.bottomButtons}>
              <PrimaryButton
                type="submit"
                fontColor="secondary"
                size="large"
                disabled={!isValid}
              >
                Zmień
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
