import "react-toastify/dist/ReactToastify.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Routes, Route, Navigate } from "react-router-dom";
//import Home from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import ProjectDetail from "./components/ProjectDetail";
import BoardDetail from "./components/BoardDetail";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ForgotPassword } from "./components/ForgotPassword";
import { InvitationActionPage } from "./components/InvitationActionPage";
import { NotificationCenter } from "./components/NotificationCenter";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/projects"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/projects/:projectSlug"
        element={
          <ProtectedRoute>
            <ProjectDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/boards/:boardSlug"
        element={
          <ProtectedRoute>
            <BoardDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <NotificationCenter />
          </ProtectedRoute>
        }
      />
      <Route
        path="/invites/:token"
        element={
          <ProtectedRoute>
            <InvitationActionPage />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
