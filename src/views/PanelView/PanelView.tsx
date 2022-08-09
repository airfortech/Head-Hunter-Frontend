import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import classes from "./PanelView.module.css";

export const PanelView = () => {
  return (
    <div className={classes.PanelView}>
      <Header />
      <div className={classes.wrapper}>
        <Outlet />
      </div>
    </div>
  );
};
