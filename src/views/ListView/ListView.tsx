import React from "react";
import { Outlet } from "react-router-dom";
import { TabsNavigation } from "../../components/TabsNavigation/TabsNavigation";
import classes from "./ListView.module.css";

interface Props {
  routes: {
    anchor: string;
    route: string;
  }[];
}

export const ListView = ({ routes }: Props) => {
  return (
    <div className={classes.ListView}>
      <TabsNavigation routes={routes} />
      <Outlet />
    </div>
  );
};
