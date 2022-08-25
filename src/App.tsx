import { LoginResponse } from "./types";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UnprotectedRoutes } from "./routes/UnprotectedRoutes";
import { AdminRoutes } from "./routes/AdminRoutes";
import { HRsRoutes } from "./routes/HRsRoutes";
import { StudentRoutes } from "./routes/StudentRoutes";
import { Scrollbar } from "./components/Scrollbar/Scrollbar";
import { config } from "./config/config";
import classes from "./App.module.css";
import { useAuth } from "./hooks/useAuth";

const fetchRefreshAuthData = async (): Promise<LoginResponse> => {
  const response = await fetch(config.apiUrl + "auth/refresh", {
    credentials: "include",
  });
  return response.json();
};

export const App = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { code, data } = await fetchRefreshAuthData();
        if (code === 200) setAuth(data);
        navigate("/");
      } catch (e) {}
    })();
  }, []);
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
