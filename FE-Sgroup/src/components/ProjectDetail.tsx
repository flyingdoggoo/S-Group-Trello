import useBoards from "@/hooks/useBoards";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/Sidebar";
import { BoardModalCreate } from "@/components/ui/board.modal.create";
import { ToastContainer, toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { useProjectsStore } from "@/stores/projects.store";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { apiClient } from "@/api/apiClient";

import { HeaderEntity } from "./shared/headers/HeaderEntity";

export default function ProjectDetail() {
  const projectId = useParams().id as string;
  const { boards, error, refetch } = useBoards({ projectId });
  const projects = useProjectsStore((state) => state.projects);
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    boardId: string;
  } | null>(null);

  const project = projects.find((p) => p.id === projectId);

  // Close context menu on click outside
  useEffect(() => {
    const handleClick = () => setContextMenu(null);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleContextMenu = (e: React.MouseEvent, boardId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      boardId,
    });
  };

  const handleDeleteBoard = async (boardId: string) => {
    try {
      await apiClient.delete(`/projects/${projectId}/boards/${boardId}`);
      toast.success("Board deleted successfully");
      refetch();
      setContextMenu(null);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to delete board");
      console.error(err);
    }
  };

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
                onContextMenu={(e) => handleContextMenu(e, board.id)}
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

          {/* Context Menu */}
          {contextMenu?.visible && (
            <div
              className="fixed bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50"
              style={{ top: contextMenu.y, left: contextMenu.x }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => handleDeleteBoard(contextMenu.boardId)}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => setContextMenu(null)}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </main>
      </SidebarProvider>
    </div>
  );
}
