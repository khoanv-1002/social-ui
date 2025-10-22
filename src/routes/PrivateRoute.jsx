import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { getAccessToken } from "../service/storeService";

const PrivateRoute = ({ redirectTo = "/auth", onlyAdmin = false }) => {
  const token = getAccessToken();
  
  if (!token || (onlyAdmin && user?.role !== "ROLE_ADMIN")) {
    return <Navigate to={redirectTo} replace />;
  }
  
  return <Outlet />;
};

export default PrivateRoute;
