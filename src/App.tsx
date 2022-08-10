import React from "react";
import { Route, Routes } from "react-router-dom";
import { UnprotectedRoutes } from "./routes/UnprotectedRoutes";
import { AdminRoutes } from "./routes/AdminRoutes";
import { HRsRoutes } from "./routes/HRsRoutes";
import { StudentRoutes } from "./routes/StudentRoutes";
import { Scrollbar } from "./components/Scrollbar/Scrollbar";
import classes from "./App.module.css";

export const App = () => {
  // const role = "admin";
  // - dla wszystkich:
  //  /login
  //  /lostpassword
  //  /register - password generate
  //  /panel/settings
  //
  // - admin:
  //  /panel/admin/hrs
  //  /panel/admin/students
  //  /panel/admin/students/available
  //  /panel/admin/students/reserved
  //  /panel/admin/students/hired
  //
  //  /panel/admin/students/:id - cv
  //  /panel/admin/settings
  //
  // - user:
  //  /panel/student - cv usera
  //  /panel/student/settings
  //
  // - hr:
  //  /panel/hr/students/available
  //  /panel/hr/students/reserved
  //  /panel/hr/students/hired
  //
  //  /panel/hr/students/:id - cv
  //  /panel/hr/settings
  return (
    <div className={classes.App}>
      <Scrollbar>
        <Routes>
          {/* <Route path="/" element={<UnprotectedRoutes />} /> */}
          <Route path="panel/hr/*" element={<HRsRoutes />} />
          <Route path="panel/admin/*" element={<AdminRoutes />} />
          <Route path="panel/student/*" element={<StudentRoutes />} />
          <Route path="*" element={<UnprotectedRoutes />} />
        </Routes>
      </Scrollbar>
    </div>
  );
};
