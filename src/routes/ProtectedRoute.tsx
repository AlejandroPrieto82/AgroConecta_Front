import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import type { ReactNode } from "react"; // <- type-only import

type ProtectedRouteProps = {
  children: ReactNode; // 
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useUser();

  if (!user) return <Navigate to="/login" replace />;

  return <>{children}</>; // usar fragment para envolver
};

export default ProtectedRoute;