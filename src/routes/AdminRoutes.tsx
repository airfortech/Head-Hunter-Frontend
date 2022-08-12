import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../components/RequireAuth/RequireAuth";
import { CVView } from "../views/CVView/CVView";
import { ListView } from "../views/ListView/ListView";
import { PanelView } from "../views/PanelView/PanelView";
import { UsersListView } from "../views/UsersListView/UsersListView";
import { NoMatch } from "../views/NoMatch/NoMatch";
import { UserRole } from "../types";

const navLinks = [
  { anchor: "HRowcy", route: "hrs" },
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
          <Route path="*" element={<ListView routes={navLinks} />}>
            <Route path="hrs" element={<UsersListView />} />
            <Route path="students" element={<UsersListView />} />
            <Route path="students/available" element={<UsersListView />} />
            <Route path="students/reserved" element={<UsersListView />} />
            <Route path="students/hired" element={<UsersListView />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Route>
    </Routes>
  );
};
