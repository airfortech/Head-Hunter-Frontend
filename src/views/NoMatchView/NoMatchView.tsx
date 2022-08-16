import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/buttons/PrimaryButton/PrimaryButton";
import logo from "../../assets/images/logo.png";
import classes from "./NoMatchView.module.css";

interface LocationState {
  message: string;
  back: number;
}

export const NoMatchView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location?.state as LocationState;

  return (
    <div className={classes.NoMatch}>
      <img src={logo} alt="MegaK Logo" className={classes.logo} />
      <h1>{state?.message ? state.message : "Ups! Nie znaleziono strony."}</h1>
      <PrimaryButton
        type="submit"
        color="primary"
        fontColor="secondary"
        size="large"
        icon="back"
        iconColor="secondary"
        onClick={() => navigate(state?.back ? state.back : -1)}
      >
        Wstecz
      </PrimaryButton>
    </div>
  );
};
