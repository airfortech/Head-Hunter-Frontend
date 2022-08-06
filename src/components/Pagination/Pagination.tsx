import React from "react";
import { Button } from "./Button/Button";
import classes from "./Pagination.module.css";

export const Pagination = () => {
  return (
    <div className={classes.Pagination}>
      <p>Ilość elementów</p>
      <button>10</button>
      <p>10 z 80</p>
      <Button icon="prev" />
      <Button icon="next" />
    </div>
  );
};
