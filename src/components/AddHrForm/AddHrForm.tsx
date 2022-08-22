import React, { MouseEventHandler, useState } from "react";
import { Form, Formik } from "formik";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { FormGroup } from "../SearchPanel/FormGroup/FormGroup";
import { Spinner } from "../Spinner/Spinner";
import { ValidationSchema } from "./AddHrFormData";
import classes from "./AddHrForm.module.css";

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
  const [isSpinnerLoading /* setIsSpinnerLoading */] = useState(false);

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
        initialValues={{ test: "test" }}
        validationSchema={ValidationSchema}
        validate={() => setApiInfo(initialApiInfo)}
        onSubmit={async () => {
          console.log("addHr");

          // try {
          //   setIsSpinnerLoading(true);
          //   await fetchEditHr({
          //     id: userId,
          //     maxReservedStudents,
          //   });
          //   setIsSpinnerLoading(false);
          //   setApiInfo({
          //     type: "success",
          //     message: "Zmieniłeś dane Hrowca!",
          //   });
          //   refreshList();
          // } catch (e) {
          //   setApiInfo({
          //     type: "error",
          //     message: "Spróbuj później!",
          //   });
          //   setIsSpinnerLoading(false);
          // }
        }}
      >
        {({ errors, isValid }) => (
          <Form className={classes.form}>
            <FormGroup title="Maksymalna liczba rezerwacji do interview">
              <Input
                type="text"
                size="normal"
                name="test"
                forFormik
                placeholder="np. 9"
              />
            </FormGroup>
            <p
              className={`${classes.info} ${
                apiInfo.type === "success" && classes.success
              }`}
            >
              {errors.test
                ? errors.test
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
