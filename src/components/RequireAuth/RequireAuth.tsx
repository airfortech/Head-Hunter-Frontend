import { useLocation, Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  allowedRole: string;
}

export const RequireAuth = ({ allowedRole }: Props) => {
  const { auth } = useAuth();
  const location = useLocation();

  return allowedRole === auth.role && !!Cookies.get("jwt") ? (
    <Outlet />
  ) : auth?.id && !!Cookies.get("jwt") ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
