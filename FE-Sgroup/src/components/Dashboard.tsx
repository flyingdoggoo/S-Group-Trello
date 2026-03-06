import useProjects from "@/hooks/useProjects";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/Sidebar";
import { ProjectModalCreate } from "@/components/ui/project.modal.create";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { BoardModalCreate } from "@/components/ui/board.modal.create";
import { apiClient } from "@/api/apiClient";
import { useProjectsStore } from "@/stores/projects.store";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

export function Dashboard() {
  const { projects, error, isLoading } = useProjects();
  const { setProjects } = useProjectsStore();

  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    boardId: string;
    projectId: string;
  } | null>(null);

  // Close context menu on click outside
  useEffect(() => {
    const handleClick = () => setContextMenu(null);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleContextMenu = (e: React.MouseEvent, boardId: string, projectId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({ visible: true, x: e.clientX, y: e.clientY, boardId, projectId });
  };

  const handleDeleteBoard = async () => {
    if (!contextMenu) return;
    const { boardId, projectId } = contextMenu;
    try {
      await apiClient.delete(`/projects/${projectId}/boards/${boardId}`);
      toast.success("Board deleted successfully");
      // Remove board from local store
      const updated = projects.map((p: any) =>
        p.id === projectId
          ? { ...p, boards: (p.boards || []).filter((b: any) => b.id !== boardId), boardCount: (p.boardCount || 1) - 1 }
          : p
      );
      setProjects(updated);
      setContextMenu(null);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to delete board");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer />
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 p-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-black">Dashboard</h1>
              <p className="text-sm text-neutral-500 mt-1">
                Manage your workspaces and boards
              </p>
            </div>
            <ProjectModalCreate />
          </div>
          {error && <div className="text-red-600 text-sm mb-4 px-3 py-2 bg-red-50 rounded-md border border-red-200">{error}</div>}

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <svg className="animate-spin h-8 w-8 text-black mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              <p className="text-sm text-neutral-400">Loading projects...</p>
            </div>
          ) : (
          /* Projects */
          <div className="flex flex-col gap-10">
            {projects.map((project: any) => (
              <section key={project.id}>
                {/* Project header */}
                <div className="flex items-center gap-3 mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <path d="M7 7h3v9H7zm7 0h3v5h-3z" />
                  </svg>
                  <h2 className="text-lg font-semibold text-black tracking-tight">
                    {project.title}
                  </h2>
                </div>
                {project.description && (
                  <p className="text-sm text-neutral-500 mb-1 ml-8">{project.description}</p>
                )}
                <p className="text-xs text-neutral-400 mb-4 ml-8">
                  {project.boardCount || 0} Boards
                </p>

                {/* Board grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ml-8">
                  {project.boards &&
                    project.boards.map((board: any) => (
                      <Link
                        key={board.id}
                        to={`/boards/${board.id}`}
                        onContextMenu={(e) => handleContextMenu(e, board.id, project.id)}
                        className="group relative border border-neutral-200 rounded-lg p-5 bg-white hover:border-black hover:shadow-md transition-all duration-200 cursor-pointer"
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
                            className="text-neutral-400 group-hover:text-black transition-colors"
                          >
                            <path d="M5 3v14"></path>
                            <path d="M12 3v8"></path>
                            <path d="M19 3v18"></path>
                          </svg>
                          <h3 className="font-medium text-black">
                            {board.title}
                          </h3>
                        </div>
                        {board.description && (
                          <p className="text-sm text-neutral-500 line-clamp-2">{board.description}</p>
                        )}
                      </Link>
                    ))}
                  <BoardModalCreate projectId={project.id} />
                </div>
              </section>
            ))}
          </div>
          )}

          {/* Context Menu */}
          {contextMenu?.visible && (
            <div
              className="fixed bg-white border border-neutral-200 rounded-lg shadow-lg py-1 z-50 min-w-[140px]"
              style={{ top: contextMenu.y, left: contextMenu.x }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleDeleteBoard}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-neutral-50 transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => setContextMenu(null)}
                className="w-full px-4 py-2 text-left text-sm text-neutral-600 hover:bg-neutral-50 transition-colors"
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
