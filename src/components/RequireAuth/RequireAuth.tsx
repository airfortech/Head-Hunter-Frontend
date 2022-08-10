import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  allowedRole: string;
}

export const RequireAuth = ({ allowedRole }: Props) => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(auth);

  return allowedRole === auth.role ? (
    <Outlet />
  ) : auth?.id ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
