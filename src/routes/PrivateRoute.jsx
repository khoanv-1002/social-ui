import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ redirectTo = "/auth", onlyAdmin = false }) => {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated || (onlyAdmin && user?.role !== "ROLE_ADMIN")) {
    return <Navigate to={redirectTo} replace />;
  }
  
  return <Outlet />;
};

export default PrivateRoute;
