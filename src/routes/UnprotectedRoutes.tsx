import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { IndexView } from "../views/IndexView/IndexView";
import { LoginView } from "../views/LoginView/LoginView";
import { LostPasswordView } from "../views/LostPasswordView/LostPasswordView";
import { RegisterView } from "../views/RegisterView/RegisterView";
import { UnauthorizedView } from "../views/UnauthorizedView/UnauthorizedView";
import { NoMatch } from "../views/NoMatch/NoMatch";

export const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexView />} />
      <Route path="login" element={<LoginView />} />
      <Route path="lostpassword" element={<LostPasswordView />} />
      <Route path="register" element={<RegisterView />} />
      {/* <Route path="register/:id/:token" element={<RegisterView />} /> */}
      <Route path="unauthorized" element={<UnauthorizedView />} />
      <Route path="notfound" element={<NoMatch />} />
      <Route path="*" element={<Navigate replace to="/notfound" />} />
    </Routes>
  );
};
