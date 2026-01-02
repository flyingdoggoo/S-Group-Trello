import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import ProjectDetail from "./components/ProjectDetail";
import BoardDetail from "./components/BoardDetail";
import { ProtectedRoute } from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
        path="/projects/:id/boards" 
        element={
          <ProtectedRoute>
            <ProjectDetail />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/projects/:id/boards/:boardId/lists" 
        element={
          <ProtectedRoute>
            <BoardDetail />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


