import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../components/RequireAuth/RequireAuth";
import { CVView } from "../views/CVView/CVView";
import { ListView } from "../views/ListView/ListView";
import { NoMatch } from "../views/NoMatch/NoMatch";
import { PanelView } from "../views/PanelView/PanelView";
import { UsersListView } from "../views/UsersListView/UsersListView";
import { SettingsView } from "../views/SettingsView/SettingsView";
import { UserRole } from "../types";

const navLinks = [
  { anchor: "Dostępni kursanci", route: "available" },
  { anchor: "Do rozmowy", route: "reserved" },
  { anchor: "Zatrudnieni", route: "hired" },
];

export const HRsRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<RequireAuth allowedRole={UserRole.hr} />}>
        <Route path="*" element={<PanelView />}>
          <Route path="students/:id" element={<CVView />} />
          <Route path="settings" element={<SettingsView />} />
          <Route path="students" element={<ListView routes={navLinks} />}>
            <Route
              path="available"
              element={
                <UsersListView
                  listType="hrStudentAvailable"
                  searchType="hrStudentAvailable"
                />
              }
            />
            <Route
              path="reserved"
              element={
                <UsersListView
                  listType="hrStudentToTalk"
                  searchType="hrStudentToTalk"
                />
              }
            />
            <Route
              path="hired"
              element={
                <UsersListView
                  listType="hrStudentHired"
                  searchType="hrStudentHired"
                />
              }
            />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Route>
    </Routes>
  );
};
