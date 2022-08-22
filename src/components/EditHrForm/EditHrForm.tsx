import { HrProfileEntity } from "../../types";
import React, { MouseEventHandler, useState } from "react";
import { Form, Formik } from "formik";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { FormGroup } from "../SearchPanel/FormGroup/FormGroup";
import { Spinner } from "../Spinner/Spinner";
import { ValidationSchema } from "./EditHrFormData";
import classes from "./EditHrForm.module.css";

interface Props {
  data: HrProfileEntity;
  closeModal: MouseEventHandler;
}

interface ApiInfo {
  type: "success" | "error";
  message: string;
}

const initialApiInfo: ApiInfo = {
  type: "error",
  message: "",
};

export const EditHrForm = ({ data, closeModal }: Props) => {
  const [apiInfo /* setApiInfo */] = useState<ApiInfo>(initialApiInfo);
  const [isSpinnerLoading /* setIsSpinnerLoading */] = useState(false);

  return (
    <div className={classes.EditHrForm}>
      <div className={classes.row}>
        <h2>Edycja Hrowca</h2>
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
        initialValues={{ maxReservedStudents: data.maxReservedStudents }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          console.log("editHr", values);
        }}
      >
        {({ errors, isValid }) => (
          <Form className={classes.form}>
            <FormGroup title="Maksymalna liczba rezerwacji do interview">
              <Input
                type="text"
                size="normal"
                name="maxReservedStudents"
                forFormik
                placeholder="np. 9"
              />
            </FormGroup>
            <p
              className={`${classes.info} ${
                apiInfo.type === "success" && classes.success
              }`}
            >
              {errors.maxReservedStudents
                ? errors.maxReservedStudents
                : apiInfo.message
                ? apiInfo.message
                : null}
            </p>
            <div className={classes.bottomButtons}>
              {isSpinnerLoading && <Spinner />}
              <PrimaryButton
                type="submit"
                fontColor="secondary"
                disabled={!isValid}
              >
                Zmień dane
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
