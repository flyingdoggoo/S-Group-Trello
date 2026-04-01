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
import { LayoutGrid, MoreHorizontal } from "lucide-react";

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
      const updated = projects.map((project: any) =>
        project.id === projectId
          ? {
              ...project,
              boards: (project.boards || []).filter((board: any) => board.id !== boardId),
              boardCount: Math.max((project.boardCount || 1) - 1, 0),
            }
          : project
      );
      setProjects(updated);
      setContextMenu(null);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to delete board");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen">
      <ToastContainer />

      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-8 px-6 py-8 lg:px-10">
            <header className="surface-panel animate-soft-fade-up flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-100">Workspace Dashboard</h1>
                <p className="mt-2 text-sm text-slate-300">
                  Keep projects organized, jump into boards quickly, and maintain momentum.
                </p>
              </div>
              <ProjectModalCreate />
            </header>

            {error && (
              <div className="rounded-xl border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</div>
            )}

            {isLoading ? (
              <div className="surface-panel flex flex-col items-center justify-center py-28">
                <svg className="mb-3 h-8 w-8 animate-spin text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                <p className="text-sm text-slate-300">Loading workspaces...</p>
              </div>
            ) : (
              <div className="space-y-8">
                {projects.length === 0 && (
                  <section className="surface-panel p-8 text-center">
                    <p className="text-lg font-medium text-slate-100">No workspaces yet</p>
                    <p className="mt-2 text-sm text-slate-300">Create your first workspace to start building boards.</p>
                  </section>
                )}

                {projects.map((project: any) => (
                  <section key={project.id} className="surface-panel animate-soft-fade-up p-6">
                    <div className="divider-soft mb-5 flex flex-col gap-3 pb-5 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-slate-100">{project.title}</h2>
                        <p className="mt-1 text-sm text-slate-300">{project.description || "No description provided yet."}</p>
                      </div>
                      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-slate-900/70 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
                        <LayoutGrid className="h-3.5 w-3.5" />
                        {project.boardCount || 0} Boards
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {project.boards?.map((board: any) => (
                        <Link
                          key={board.id}
                          to={`/boards/${board.id}`}
                          onContextMenu={(e) => handleContextMenu(e, board.id, project.id)}
                          className="surface-card group relative p-5"
                        >
                          <div className="mb-3 flex items-start justify-between gap-3">
                            <div>
                              <h3 className="text-base font-semibold text-slate-100">{board.title}</h3>
                              <p className="mt-1 text-xs uppercase tracking-wide text-blue-200/80">Board</p>
                            </div>
                            <span className="rounded-lg border border-white/12 bg-slate-900/70 p-1.5 text-slate-400 transition-colors group-hover:text-slate-200">
                              <MoreHorizontal className="h-4 w-4" />
                            </span>
                          </div>
                          <p className="line-clamp-2 text-sm leading-relaxed text-slate-300">
                            {board.description || "Plan tasks, assign owners, and deliver work confidently."}
                          </p>
                        </Link>
                      ))}

                      <BoardModalCreate projectId={project.id} />
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        </main>
      </SidebarProvider>

      {contextMenu?.visible && (
        <div
          className="fixed z-50 min-w-[168px] rounded-xl border border-white/12 bg-slate-900/95 p-1.5 shadow-[0_20px_44px_-24px_rgba(2,6,23,0.95)] backdrop-blur-xl"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleDeleteBoard}
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-300 transition-colors hover:bg-red-400/10 hover:text-red-200"
          >
            Delete board
          </button>
          <button
            onClick={() => setContextMenu(null)}
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-slate-800/75 hover:text-white"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
