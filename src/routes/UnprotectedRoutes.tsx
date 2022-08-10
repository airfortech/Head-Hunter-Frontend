import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginView } from "../views/LoginView/LoginView";
import { LostPasswordView } from "../views/LostPasswordView/LostPasswordView";
import { RegisterView } from "../views/RegisterView/RegisterView";
import { UnauthorizedView } from "../views/UnauthorizedView/UnauthorizedView";
import { NoMatch } from "../views/NoMatch/NoMatch";

export const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginView />} />
      <Route path="lostpassword" element={<LostPasswordView />} />
      <Route path="register" element={<RegisterView />} />
      <Route path="unauthorized" element={<UnauthorizedView />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
