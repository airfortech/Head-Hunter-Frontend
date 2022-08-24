import React, { MouseEventHandler, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { Form, Formik } from "formik";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { FormGroup } from "../SearchPanel/FormGroup/FormGroup";
import { Spinner } from "../Spinner/Spinner";
import { initialHrInfoValues, ValidationSchema } from "./AddHrFormData";
import { fetchAddHr } from "../../utils/fetchAddHr";
import classes from "./AddHrForm.module.css";
import { AddHrResponseMessage, JsonResponseStatus } from "../../types";

interface Props {
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

export const AddHrForm = ({ closeModal }: Props) => {
  const [apiInfo, setApiInfo] = useState<ApiInfo>(initialApiInfo);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);
  const { refreshList } = useSearch();

  return (
    <div className={classes.AddHrForm}>
      <div className={classes.row}>
        <h2>Dodawanie Hrowca</h2>
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
        initialValues={initialHrInfoValues}
        validationSchema={ValidationSchema}
        validate={() => setApiInfo(initialApiInfo)}
        onSubmit={async (
          { fullName, email, company, maxReservedStudents },
          { resetForm }
        ) => {
          console.log("addHr");

          try {
            setIsSpinnerLoading(true);
            const { status, message } = await fetchAddHr({
              fullName,
              email,
              company,
              maxReservedStudents,
            });
            if (status === JsonResponseStatus.success) {
              setIsSpinnerLoading(false);
              setApiInfo({
                type: "success",
                message: "Dodałeś użytkownika Hr!",
              });
              resetForm();
              refreshList();
            }
            if (message === AddHrResponseMessage.hrAlreadyExist) {
              setIsSpinnerLoading(false);
              setApiInfo({
                type: "error",
                message: "Użytkownik o takim adresie email już istnieje!",
              });
            }
          } catch (e) {
            setApiInfo({
              type: "error",
              message: "Spróbuj później!",
            });
            setIsSpinnerLoading(false);
          }
        }}
      >
        {({ errors, isValid }) => (
          <Form className={classes.form}>
            <FormGroup title="Imię i nazwisko">
              <Input
                type="text"
                size="large"
                name="fullName"
                forFormik
                placeholder="np. Joe Doe"
              />
            </FormGroup>
            <FormGroup title="Adres e-mail">
              <Input
                type="text"
                size="large"
                name="email"
                forFormik
                placeholder="np. joedoe@gmail.com"
              />
            </FormGroup>
            <FormGroup title="Nazwa firmy">
              <Input
                type="text"
                size="large"
                name="company"
                forFormik
                placeholder="np. Google"
              />
            </FormGroup>
            <FormGroup title="Maksymalna liczba rezerwacji do interview">
              <Input
                type="text"
                size="large"
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
              {errors.fullName
                ? errors.fullName
                : errors.email
                ? errors.email
                : errors.company
                ? errors.company
                : errors.maxReservedStudents
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
                Dodaj Hrowca
              </PrimaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
