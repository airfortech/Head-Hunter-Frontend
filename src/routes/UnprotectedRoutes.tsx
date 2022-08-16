import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { IndexView } from "../views/IndexView/IndexView";
import { LoginView } from "../views/LoginView/LoginView";
import { LostPasswordView } from "../views/LostPasswordView/LostPasswordView";
import { RegisterView } from "../views/RegisterView/RegisterView";
import { UnauthorizedView } from "../views/UnauthorizedView/UnauthorizedView";
import { UnprotectedView } from "../views/UnprotectedView/UnprotectedView";
import { NoMatchView } from "../views/NoMatchView/NoMatchView";

export const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexView />} />
      <Route path="*" element={<UnprotectedView />}>
        <Route path="login" element={<LoginView />} />
        <Route path="lostpassword" element={<LostPasswordView />} />
        <Route path="register" element={<RegisterView />} />
        {/* <Route path="register/:id/:token" element={<RegisterView />} /> */}
        <Route path="unauthorized" element={<UnauthorizedView />} />
        <Route path="notfound" element={<NoMatchView />} />
        <Route path="*" element={<Navigate replace to="/notfound" />} />
      </Route>
    </Routes>
  );
};
