import React from "react";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import classes from "./SearchPanel.module.css";

export const SearchPanel = () => {
  return (
    <div className={classes.SearchPanel}>
      <Input
        type="text"
        size="large"
        color="secondary"
        icon="search"
        placeholder="Szukaj"
      />
      <PrimaryButton size="large" color="tertiary" icon="filter">
        Filtrowanie
      </PrimaryButton>
    </div>
  );
};
