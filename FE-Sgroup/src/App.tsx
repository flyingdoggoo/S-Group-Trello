import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import ProjectDetail from "./components/ProjectDetail";
import BoardDetail from "./components/BoardDetail";
// import { useAuthStore } from "./stores/auth.store";
// import { Button } from "./components/ui/button";
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

// function Comp1() {
//   const authStore = useAuthStore();
//   return (
//     <div>
//       <Button onClick={() => authStore.setName('New Name')}>Change Name</Button>
//     </div>
//   )
// }

// function Com2(){
//   const authStore = useAuthStore();
//   return (
//     <div>
//       <p>{authStore.name}</p>
//     </div>
//   )
// }

// export default function App() {
//   return (
//     <div>
//       <Comp1 />
//       <Com2 />
//     </div>
//   )
// }


