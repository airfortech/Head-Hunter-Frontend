import React from "react";
import { Route, Routes } from "react-router-dom";
import { Scrollbar } from "./components/Scrollbar/Scrollbar";
import { LoginView } from "./views/LoginView/LoginView";
import { HRView } from "./views/HRView/HRView";
import { CVView } from "./views/CVView/CVView";
import { StudentsListView } from "./views/StudentsListView/StudentsListView";
import classes from "./App.module.css";

export const App = () => {
  return (
    <div className={classes.App}>
      <Scrollbar>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/hr" element={<HRView />} />
          <Route path="/cv" element={<CVView />} />
          <Route path="/students" element={<StudentsListView />} />
          <Route path="/students/reserved" element={<StudentsListView />} />
        </Routes>
      </Scrollbar>
    </div>
  );
};
