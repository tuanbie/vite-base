import useGetCurrentUser from "../../hooks/useGetCurrentUser";
import { Outlet, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  allowedRoles?: string[];
}

function PrivateRoute({ allowedRoles = [] }: PrivateRouteProps) {
  const auth = useGetCurrentUser();
  const authorized: boolean = allowedRoles.length > 0 ? allowedRoles.some((role) => role === auth?.role) : true;
  return auth ? authorized ? <Outlet /> : <Navigate to="/" /> : <Navigate to="/" />;
}

export default PrivateRoute;
