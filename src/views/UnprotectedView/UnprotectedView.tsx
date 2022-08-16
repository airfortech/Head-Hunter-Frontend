import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeSwitcher } from "../../components/ThemeSwitcher/ThemeSwitcher";
import classes from "./UnprotectedView.module.css";

export const UnprotectedView = () => {
  return (
    <div className={classes.UnprotectedView}>
      <aside className={classes.switcher}>
        <ThemeSwitcher />
      </aside>
      <Outlet />
    </div>
  );
};
