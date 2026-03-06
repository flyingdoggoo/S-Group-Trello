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
  const { boards, error, isLoading, refetch } = useBoards({ projectId });
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-950 dark:to-slate-900">
      <ToastContainer />
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 p-10">
          <HeaderEntity
            title={project?.title ?? ""}
            entityType="project"
            entityId={projectId}
            projectId={projectId}
          />

          {project?.description && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{project.description}</p>
          )}
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-8">{boards.length} Boards</p>
          {error && <div className="text-red-600 text-sm mb-4 px-3 py-2 bg-red-50 rounded-md border border-red-200">{error}</div>}

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <svg className="animate-spin h-8 w-8 text-slate-600 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              <p className="text-sm text-slate-400">Loading boards...</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {boards.map((board: any) => (
              <Link
                key={board.id}
                to={`/boards/${board.id}`}
                onContextMenu={(e) => handleContextMenu(e, board.id)}
                className="group border border-slate-200 dark:border-slate-700 rounded-lg p-5 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-400 group-hover:text-slate-700 transition-colors"
                  >
                    <path d="M5 3v14"></path>
                    <path d="M12 3v8"></path>
                    <path d="M19 3v18"></path>
                  </svg>
                  <h2 className="font-medium text-slate-800 dark:text-slate-100">{board.title}</h2>
                </div>
                {board.description && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{board.description}</p>
                )}
              </Link>
            ))}
            <BoardModalCreate projectId={projectId} />
          </div>
          )}

          {/* Context Menu */}
          {contextMenu?.visible && (
            <div
              className="fixed bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-1 z-50 min-w-[140px]"
              style={{ top: contextMenu.y, left: contextMenu.x }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => handleDeleteBoard(contextMenu.boardId)}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-slate-50 transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => setContextMenu(null)}
                className="w-full px-4 py-2 text-left text-sm text-slate-600 hover:bg-slate-50 transition-colors"
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
