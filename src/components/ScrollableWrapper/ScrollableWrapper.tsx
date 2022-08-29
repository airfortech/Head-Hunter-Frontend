import React from "react";
import classes from "./ScrollableWrapper.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ScrollableWrapper = ({ children }: Props) => {
  return <div className={classes.ScrollableWrapper}>{children}</div>;
};
