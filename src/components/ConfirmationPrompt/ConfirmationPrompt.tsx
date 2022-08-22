import React, { MouseEventHandler } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import classes from "./ConfirmationPrompt.module.css";

interface Props {
  title: string;
  question: string;
  closeModal: MouseEventHandler;
  onConfirm: MouseEventHandler;
}

export const ConfirmationPrompt = ({
  title,
  question,
  closeModal,
  onConfirm,
}: Props) => {
  return (
    <div className={classes.ConfirmationPrompt}>
      <div className={classes.row}>
        <h2>{title}</h2>
        <PrimaryButton color="quaternary" onClick={closeModal}>
          Anuluj
        </PrimaryButton>
      </div>
      <p className={classes.question}>{question}</p>
      <div className={classes.actions}>
        <PrimaryButton color="primary" onClick={onConfirm}>
          Tak
        </PrimaryButton>
        <PrimaryButton color="secondary" onClick={closeModal}>
          Nie
        </PrimaryButton>
      </div>
    </div>
  );
};
