import React from "react";
import { Header } from "../../components/Header/Header";
import classes from "./PanelLayout.module.css";

interface Props {
  children: JSX.Element;
}

export const PanelLayout = ({ children }: Props) => {
  return (
    <div className={classes.PanelLayout}>
      <Header />
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};
