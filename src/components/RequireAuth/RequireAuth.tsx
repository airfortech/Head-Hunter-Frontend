import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
const auth: any = {
  user: "Joe",
  role: "admin",
};

interface Props {
  allowedRole: string;
}

export const RequireAuth = ({ allowedRole }: Props) => {
  // const { auth } = useAuth();
  const location = useLocation();

  return allowedRole === auth.role ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
