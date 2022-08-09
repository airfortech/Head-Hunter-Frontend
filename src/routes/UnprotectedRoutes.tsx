import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginView } from "../views/LoginView/LoginView";
import { NoMatch } from "../views/NoMatch/NoMatch";

export const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginView />} />
      <Route path="lostpassword" element={<LoginView />} />
      <Route path="register" element={<LoginView />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
