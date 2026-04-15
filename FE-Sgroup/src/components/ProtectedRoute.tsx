import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import { getAccessToken, refreshSession } from "@/api/apiClient";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const [authState, setAuthState] = useState<"checking" | "authenticated" | "unauthenticated">(
    getAccessToken() ? "authenticated" : "checking"
  );

  useEffect(() => {
    let mounted = true;

    if (authState !== "checking") {
      return;
    }

    (async () => {
      const isAuthenticated = await refreshSession();
      if (!mounted) {
        return;
      }
      setAuthState(isAuthenticated ? "authenticated" : "unauthenticated");
    })();

    return () => {
      mounted = false;
    };
  }, [authState]);

  if (authState === "checking") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="surface-panel flex items-center gap-3 px-5 py-3 text-sm text-slate-200">
          <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          Checking session...
        </div>
      </div>
    );
  }

  if (authState === "unauthenticated") {
    const redirectPath = encodeURIComponent(`${location.pathname}${location.search}`);
    return <Navigate to={`/login?redirect=${redirectPath}`} replace />;
  }

  return <>{children}</>;
}
