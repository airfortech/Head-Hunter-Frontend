import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/buttons/PrimaryButton/PrimaryButton";
import logo from "../../assets/images/logo.png";
import classes from "./NoMatch.module.css";

export const NoMatch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as string;

  console.log(state);

  return (
    <div className={classes.NoMatch}>
      <img src={logo} alt="MegaK Logo" className={classes.logo} />
      <h1>{state ? state : "Ups! Nie znaleziono strony."}</h1>
      <PrimaryButton
        type="submit"
        color="primary"
        size="large"
        icon="back"
        iconColor="secondary"
        onClick={() => navigate(-1)}
      >
        Wstecz
      </PrimaryButton>
    </div>
  );
};
