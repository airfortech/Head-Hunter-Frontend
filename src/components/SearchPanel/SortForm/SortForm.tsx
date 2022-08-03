import React from "react";
import { Form, Formik } from "formik";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import classes from "./SortForm.module.css";
import { FormGroup } from "../FormGroup/FormGroup";
import { CheckItem } from "../FormGroup/CheckItem/CheckItem";

export const SortForm = () => {
  return (
    <div className={classes.SortForm}>
      <h1>Formik:</h1>
      <Formik
        initialValues={{
          courseNote: "3",
          activityNote: ["3", "4"],
          checkbox: [],
        }}
        onSubmit={(values) => console.log(values)}
      >
        <Form className={classes.form}>
          <FormGroup title="Ocena przejścia kursu">
            {[5, 4, 3, 2, 1].map((item) => (
              <CheckItem
                type="radio"
                groupName="courseNote"
                value={item.toString()}
                icon="star"
              />
            ))}
          </FormGroup>
          <FormGroup title="Ocena aktywności i zaangażowania na kursie">
            {[5, 4, 3, 2, 1].map((item) => (
              <CheckItem
                type="checkbox"
                groupName="activityNote"
                value={item.toString()}
                icon="star"
              />
            ))}
          </FormGroup>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </Form>
      </Formik>
    </div>
  );
};
