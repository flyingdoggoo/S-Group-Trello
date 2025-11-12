import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import ProjectDetail from "./components/ProjectDetail";
import BoardDetail from "./components/BoardDetail";
// import { KanbanBoard } from "./components/ui/kanban";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Dashboard />} />
      <Route path="/projects/:id/boards" element={<ProjectDetail />} />
      <Route path="/projects/:id/boards/:boardId/lists" element={<BoardDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
