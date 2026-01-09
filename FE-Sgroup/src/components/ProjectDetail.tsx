import useBoards from "@/hooks/useBoards";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/Sidebar";
import { BoardModalCreate } from "@/components/ui/board.modal.create";
import { ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { useProjectsStore } from "@/stores/projects.store";
import "react-toastify/dist/ReactToastify.css";

import { HeaderEntity } from "./shared/headers/HeaderEntity";

export default function ProjectDetail() {
  const projectId = useParams().id as string;
  const { boards, error } = useBoards({ projectId });
  const projects = useProjectsStore((state) => state.projects);

  const project = projects.find((p) => p.id === projectId);

  return (
    <div>
      <ToastContainer />
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 p-8">
          <HeaderEntity
            title={project?.title ?? ""}
            entityType="project"
            entityId={projectId}
            projectId={projectId}
          />

          <p className="text-gray-500 mb-4">{project?.description}</p>
          <p className="text-gray-500 mb-6">{boards.length} Boards</p>
          {error && <div className="text-red-500 mb-2">{error}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boards.map((board: any) => (
              <Link
                key={board.id}
                to={`/projects/${projectId}/boards/${board.id}/lists`}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-kanban h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M5 3v14"></path>
                    <path d="M12 3v8"></path>
                    <path d="M19 3v18"></path>
                  </svg>
                  <h2 className="text-lg font-semibold">{board.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{board.description}</p>
              </Link>
            ))}
            <BoardModalCreate projectId={projectId} />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
