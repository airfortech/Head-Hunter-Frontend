import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { UserRole } from "../../types";

export const IndexView = () => {
  const { id, role } = useAuth().auth;

  if (id && role === UserRole.admin) return <Navigate to="/panel/admin/hrs" />;
  if (id && role === UserRole.trainee) return <Navigate to="/panel/student" />;
  if (id && role === UserRole.hr)
    return <Navigate to="/panel/hr/students/available" />;
  else return <Navigate to="/login" />;
};
