import React from "react";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { TabsNavigation } from "../../components/TabsNavigation/TabsNavigation";
import { StudentItem } from "../../components/UsersList/StudentItem/StudentItem";
import { UsersList } from "../../components/UsersList/UsersList";
import { PanelLayout } from "../../Layouts/PanelLayout/PanelLayout";
import classes from "./StudentsListView.module.css";

export const StudentsListView = () => {
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
        <UsersList>
          <StudentItem />
          <StudentItem />
          <StudentItem />
          <StudentItem />
          <StudentItem />
        </UsersList>
      </div>
    </PanelLayout>
  );
};
