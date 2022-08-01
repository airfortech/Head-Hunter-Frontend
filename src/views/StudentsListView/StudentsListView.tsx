import React from "react";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { TabsNavigation } from "../../components/TabsNavigation/TabsNavigation";
import { PanelLayout } from "../../Layouts/PanelLayout/PanelLayout";
import classes from "./StudentsListView.module.css";

interface Props {
  path: string;
}

export const StudentsListView = ({ path }: Props) => {
  return (
    <PanelLayout>
      <div className={classes.StudentsListView}>
        <TabsNavigation
          routes={[
            { anchor: "Dostępni kursanci", route: "/students" },
            { anchor: "Do rozmowy", route: "/students/reserved" },
            { anchor: "Portfolio", route: "/cv" },
            { anchor: "Login", route: "/" },
          ]}
        />
        <SearchPanel />
        <div>{path}</div>
      </div>
    </PanelLayout>
  );
};
