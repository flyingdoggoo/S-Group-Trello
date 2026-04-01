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
import { LayoutGrid, MoreHorizontal } from "lucide-react";

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
    <div className="min-h-screen">
      <ToastContainer />
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1">
          <div className="mx-auto flex w-full max-w-[1450px] flex-col gap-6 px-6 py-8 lg:px-10">
            <section className="surface-panel animate-soft-fade-up p-6">
              <HeaderEntity
                title={project?.title ?? "Workspace"}
                entityType="project"
                entityId={projectId}
                projectId={projectId}
              />
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <p>{project?.description || "Boards for this workspace appear below."}</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-slate-900/65 px-3 py-1 text-xs uppercase tracking-wide text-slate-300">
                  <LayoutGrid className="h-3.5 w-3.5" />
                  {boards.length} Boards
                </span>
              </div>
            </section>

            {error && (
              <div className="rounded-xl border border-red-300/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</div>
            )}

            {isLoading ? (
              <section className="surface-panel flex flex-col items-center justify-center py-28">
                <svg className="mb-3 h-8 w-8 animate-spin text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                <p className="text-sm text-slate-300">Loading boards...</p>
              </section>
            ) : (
              <section className="surface-panel animate-soft-fade-up p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {boards.map((board: any) => (
                    <Link
                      key={board.id}
                      to={`/boards/${board.id}`}
                      onContextMenu={(e) => handleContextMenu(e, board.id)}
                      className="surface-card group relative p-5"
                    >
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div>
                          <h2 className="text-base font-semibold text-slate-100">{board.title}</h2>
                          <p className="mt-1 text-xs uppercase tracking-wide text-blue-200/80">Board</p>
                        </div>
                        <span className="rounded-lg border border-white/12 bg-slate-900/70 p-1.5 text-slate-400 transition-colors group-hover:text-slate-200">
                          <MoreHorizontal className="h-4 w-4" />
                        </span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-relaxed text-slate-300">
                        {board.description || "Manage cards, members, and flow with a cleaner board experience."}
                      </p>
                    </Link>
                  ))}
                  <BoardModalCreate projectId={projectId} />
                </div>
              </section>
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
            onClick={() => handleDeleteBoard(contextMenu.boardId)}
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
