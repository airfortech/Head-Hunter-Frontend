import React from "react";
import { Route, Routes } from "react-router-dom";
import { UnprotectedRoutes } from "./routes/UnprotectedRoutes";
import { AdminRoutes } from "./routes/AdminRoutes";
import { HRsRoutes } from "./routes/HRsRoutes";
import { StudentRoutes } from "./routes/StudentRoutes";
import { Scrollbar } from "./components/Scrollbar/Scrollbar";
import classes from "./App.module.css";

export const App = () => {
  return (
    <div className={classes.App}>
      <Scrollbar>
        <Routes>
          <Route path="*" element={<UnprotectedRoutes />} />
          <Route path="panel/hr/*" element={<HRsRoutes />} />
          <Route path="panel/admin/*" element={<AdminRoutes />} />
          <Route path="panel/student/*" element={<StudentRoutes />} />
        </Routes>
      </Scrollbar>
    </div>
  );
};
