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
import { entityMatchesIdentifier, getEntityRouteIdentifier } from "@/lib/entityIdentifiers";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBoardsStore } from "@/stores/boards.store";

export default function ProjectDetail() {
  const projectSlug = useParams().projectSlug as string;
  const projects = useProjectsStore((state) => state.projects);
  const setProjects = useProjectsStore((state) => state.setProjects);
  const removeBoardFromProject = useProjectsStore((state) => state.removeBoardFromProject);
  const removeBoardStore = useBoardsStore((state) => state.removeBoard);
  const project = projects.find((p) => entityMatchesIdentifier(p, projectSlug));
  const projectIdentifier = getEntityRouteIdentifier(project) || projectSlug;
  const projectEntityId = project?.id || projectSlug;

  const { boards, error, isLoading, refetch } = useBoards({ projectId: projectIdentifier });
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    boardId: string;
    boardIdentifier: string;
    boardTitle: string;
  } | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [pendingProjectTitle, setPendingProjectTitle] = useState("");
  const [isSavingProjectTitle, setIsSavingProjectTitle] = useState(false);
  const [boardToDelete, setBoardToDelete] = useState<{
    id: string;
    identifier: string;
    title: string;
  } | null>(null);
  const [isDeletingBoard, setIsDeletingBoard] = useState(false);

  useEffect(() => {
    const handleClick = () => setContextMenu(null);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleContextMenu = (
    e: React.MouseEvent,
    board: { id: string; slug?: string; title?: string }
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      boardId: board.id,
      boardIdentifier: getEntityRouteIdentifier(board),
      boardTitle: board.title || "Board",
    });
  };

  const handleDeleteBoard = async () => {
    if (!boardToDelete) {
      return;
    }

    setIsDeletingBoard(true);
    try {
      await apiClient.delete(`/projects/${projectIdentifier}/boards/${boardToDelete.identifier}`);

      removeBoardStore(projectIdentifier, boardToDelete.id);
      if (projectEntityId !== projectIdentifier) {
        removeBoardStore(projectEntityId, boardToDelete.id);
      }
      if (project?.id) {
        removeBoardFromProject(project.id, boardToDelete.id);
      }

      toast.success("Board deleted successfully");
      refetch();
      setBoardToDelete(null);
      setContextMenu(null);
    } catch (err: any) {
      const message =
        err?.response?.status === 403
          ? "Không có quyền xóa board."
          : err?.response?.data?.message || "Failed to delete board";
      toast.error(message);
      console.error(err);
    } finally {
      setIsDeletingBoard(false);
    }
  };

  const openEditTitleDialog = () => {
    if (!project) {
      return;
    }
    setPendingProjectTitle(project.title || "");
    setIsEditDialogOpen(true);
  };

  const handleEditTitle = async () => {
    if (!project) {
      return;
    }

    const nextTitle = pendingProjectTitle.trim();
    if (!nextTitle || nextTitle === project.title) {
      setIsEditDialogOpen(false);
      return;
    }

    setIsSavingProjectTitle(true);
    try {
      await apiClient.put(`/projects/${projectIdentifier}`, {
        title: nextTitle,
      });

      setProjects(
        projects.map((item) =>
          item.id === project.id ? { ...item, title: nextTitle } : item
        )
      );

      toast.success("Workspace title updated");
      setIsEditDialogOpen(false);
    } catch (err: any) {
      const message =
        err?.response?.status === 403
          ? "Không có quyền edit workspace."
          : err?.response?.data?.message || "Failed to update workspace title";
      toast.error(message);
    } finally {
      setIsSavingProjectTitle(false);
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
                entityId={projectEntityId}
                projectId={projectEntityId}
                onEditTitle={openEditTitleDialog}
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
                      to={`/boards/${getEntityRouteIdentifier(board)}`}
                      onContextMenu={(e) => handleContextMenu(e, board)}
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
                  <BoardModalCreate
                    projectId={projectIdentifier}
                    boardsStoreKey={projectIdentifier}
                    projectStoreId={projectEntityId}
                  />
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
            onClick={() => {
              setBoardToDelete({
                id: contextMenu.boardId,
                identifier: contextMenu.boardIdentifier,
                title: contextMenu.boardTitle,
              });
              setContextMenu(null);
            }}
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

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[420px]">
          <DialogHeader>
            <DialogTitle>Edit workspace title</DialogTitle>
            <DialogDescription>
              Update the workspace name for all members.
            </DialogDescription>
          </DialogHeader>
          <Input
            value={pendingProjectTitle}
            onChange={(e) => setPendingProjectTitle(e.target.value)}
            placeholder="Workspace title"
            autoFocus
          />
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleEditTitle}
              disabled={isSavingProjectTitle}
            >
              {isSavingProjectTitle ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={Boolean(boardToDelete)}
        onOpenChange={(open) => {
          if (!open) {
            setBoardToDelete(null);
          }
        }}
      >
        <DialogContent className="sm:max-w-[420px]">
          <DialogHeader>
            <DialogTitle>Delete board</DialogTitle>
            <DialogDescription>
              Delete <span className="font-semibold text-slate-100">{boardToDelete?.title || "this board"}</span>? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setBoardToDelete(null)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteBoard}
              disabled={isDeletingBoard}
            >
              {isDeletingBoard ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
