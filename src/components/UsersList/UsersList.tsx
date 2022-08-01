import React from "react";
import classes from "./UsersList.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UsersList = ({ children }: Props) => {
  return <ul className={classes.UsersList}>{children}</ul>;
};
