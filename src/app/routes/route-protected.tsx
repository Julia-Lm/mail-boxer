import { Navigate, Outlet } from "react-router-dom";
import type { PropsWithChildren } from "react";
import React from "react";

interface ProtectedRouteProps {
  hasAccess: boolean;
  redirectPath?: string;
}

const ProtectedRoute: React.FC<PropsWithChildren<ProtectedRouteProps>> = ({
  hasAccess,
  children,
  redirectPath = "/",
}) => {
  if (!hasAccess) {
    return <>{children ? children : <Navigate to={redirectPath} replace />}</>;
  }

  return <Outlet />;
};

export default ProtectedRoute;
