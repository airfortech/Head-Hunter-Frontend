import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../components/RequireAuth/RequireAuth";
import { CVView } from "../views/CVView/CVView";
import { PanelView } from "../views/PanelView/PanelView";
import { NoMatch } from "../views/NoMatch/NoMatch";

export const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<RequireAuth allowedRole="student" />}>
        <Route path="*" element={<PanelView />}>
          <Route index element={<CVView />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Route>
    </Routes>
  );
};
