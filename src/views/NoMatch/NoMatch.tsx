import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/buttons/PrimaryButton/PrimaryButton";
import logo from "../../assets/images/logo.png";
import classes from "./NoMatch.module.css";

interface LocationState {
  message: string;
  back: number;
}

export const NoMatch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { message, back } = location?.state as LocationState;
  console.log(back);

  console.log(message);

  return (
    <div className={classes.NoMatch}>
      <img src={logo} alt="MegaK Logo" className={classes.logo} />
      <h1>{message ? message : "Ups! Nie znaleziono strony."}</h1>
      <PrimaryButton
        type="submit"
        color="primary"
        size="large"
        icon="back"
        iconColor="secondary"
        onClick={() => navigate(back ? back : -1)}
      >
        Wstecz
      </PrimaryButton>
    </div>
  );
};
