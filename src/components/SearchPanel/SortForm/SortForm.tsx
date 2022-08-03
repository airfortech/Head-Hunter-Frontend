import React from "react";
import { Form, Formik } from "formik";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import classes from "./SortForm.module.css";
import { FormGroup } from "../FormGroup/FormGroup";
import { CheckItem } from "../FormGroup/CheckItem/CheckItem";

// interface Props {
//   field: {
//     name: string;
//     value: string;
//     onChange: React.ChangeEventHandler<HTMLInputElement>;
//     onBlur: React.ChangeEventHandler<HTMLInputElement>;
//   };
//   id: string;
//   label: string;
//   className: string;
// }

export const SortForm = () => {
  return (
    <div className={classes.SortForm}>
      <h1>Formik:</h1>
      <Formik
        initialValues={{ courseNote: "4", activityNote: "4", checkbox: [] }}
        onSubmit={(values) => console.log(values)}
      >
        <Form className={classes.form}>
          <FormGroup title="Ocena przejścia kursu">
            <CheckItem
              type="radio"
              groupName="courseNote"
              value="5"
              icon="star"
            />
            <CheckItem
              type="radio"
              groupName="courseNote"
              value="4"
              icon="star"
            />
            <CheckItem
              type="radio"
              groupName="courseNote"
              value="3"
              icon="star"
            />
            <CheckItem
              type="radio"
              groupName="courseNote"
              value="2"
              icon="star"
            />
            <CheckItem
              type="radio"
              groupName="courseNote"
              value="1"
              icon="star"
            />
          </FormGroup>
          <FormGroup title="Ocena aktywności i zaangażowania na kursie">
            <CheckItem
              type="radio"
              groupName="activityNote"
              value="5"
              icon="star"
            />
            <CheckItem
              type="radio"
              groupName="activityNote"
              value="4"
              icon="star"
            />
            <CheckItem
              type="radio"
              groupName="activityNote"
              value="3"
              icon="star"
            />
            <CheckItem
              type="radio"
              groupName="activityNote"
              value="2"
              icon="star"
            />
            <CheckItem
              type="radio"
              groupName="activityNote"
              value="1"
              icon="star"
            />
          </FormGroup>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </Form>
      </Formik>
    </div>
  );
};
