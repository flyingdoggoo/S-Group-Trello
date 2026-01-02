import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    // Nếu chưa đăng nhập, chuyển hướng về trang home (login)
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
