import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../components/RequireAuth/RequireAuth";
import { CVView } from "../views/CVView/CVView";
import { ListView } from "../views/ListView/ListView";
import { PanelView } from "../views/PanelView/PanelView";
import { UsersListView } from "../views/UsersListView/UsersListView";
import { SettingsView } from "../views/SettingsView/SettingsView";
import { UserRole } from "../types";
import { NoMatchView } from "../views/NoMatchView/NoMatchView";

const navLinks = [
  { anchor: "HR", route: "hrs" },
  { anchor: "Kursanci", route: "students" },
  { anchor: "Dostępni kursanci", route: "students/available" },
  { anchor: "Do rozmowy", route: "students/reserved" },
  { anchor: "Zatrudnieni", route: "students/hired" },
];

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<RequireAuth allowedRole={UserRole.admin} />}>
        <Route path="*" element={<PanelView />}>
          <Route path="students/:id" element={<CVView />} />
          <Route path="settings" element={<SettingsView />} />
          <Route path="*" element={<ListView routes={navLinks} />}>
            <Route path="hrs" element={<UsersListView type="adminHR" />} />
            <Route
              path="students"
              element={<UsersListView type="adminStudent" />}
            />
            <Route
              path="students/available"
              element={<UsersListView type="adminStudentAvailable" />}
            />
            <Route
              path="students/reserved"
              element={<UsersListView type="adminStudentToTalk" />}
            />
            <Route
              path="students/hired"
              element={<UsersListView type="adminStudentHired" />}
            />
          </Route>
          <Route path="*" element={<NoMatchView />} />
        </Route>
      </Route>
    </Routes>
  );
};
