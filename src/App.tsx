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

// http://localhost:3001/api/v1/trainees?search=title&page=1&limit=10&courseCompletion=1&courseEngagment=1&projectDegree=1&teamProjectDegree=1&expectedTypeWork=onsite,remote,readyToMove,hybrid&expectedContractType=uop,b2b,uz/uod&canTakeApprenticeship=true&monthsOfCommercialExp=12&expectedSalaryFrom=1000&expectedSalaryTo=8000&sortType=descending&sortByType=courseCompletion

// const url = `http://localhost:3001/api/v1/trainees?search=${search}&page=${page}&limit=${limit}&courseCompletion=${courseCompletion}&courseEngagment=${courseEngagment}&projectDegree=${projectDegree}&teamProjectDegree=${teamProjectDegree}&expectedTypeWork=${expectedTypeWork}&expectedContractType=${expectedContractType}&canTakeApprenticeship=${canTakeApprenticeship}&monthsOfCommercialExp=${monthsOfCommercialExp}&expectedSalaryFrom=${expectedSalaryFrom}&expectedSalaryTo=${expectedSalaryTo}&sortType=${sortType}&sortByType=${sortByType}`;

// pusty search param zapisywany jest np. jako search=&page=1

// wszystkie paramsy przyjda jako stringi

// domyslne wartosci:
// search = ""
// page = "1"
// limit = "10"
// courseCompletion = "1"
// courseEngagment = "1"
// projectDegree = "1"
// teamProjectDegree = "1"
// expectedTypeWork = ""
// expectedContractType = ""
// canTakeApprenticeship = "false"
// monthsOfCommercialExp = ""
// expectedSalaryFrom = ""
// expectedSalaryTo = ""
// sortType = "descending"
// sortByType = "courseCompletion"

// uwagi:
// search = szukanie po preferowane miejsce pracy/miasto/oczekiwany typ kontraktu

// expectedTypeWork = pusty albo po przecinku np. "onsite,remote"
// expectedContractType = jak wyzej

// sortType = descending/ascending
