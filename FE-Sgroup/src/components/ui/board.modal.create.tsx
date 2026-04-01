import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "react-toastify";
import { apiClient } from "@/api/apiClient";
import { useBoardsStore } from "@/stores/boards.store";
import { useProjectsStore } from "@/stores/projects.store";
import { Plus } from "lucide-react";

export function BoardModalCreate({ projectId }: { projectId: string }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const addBoard = useBoardsStore((state) => state.addBoard);
  const addBoardToProject = useProjectsStore((state) => state.addBoardToProject);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiClient.post(`projects/${projectId}/boards`, { title, description });
      if (response.data?.data) {
        const newBoard = response.data.data;
        addBoard(projectId, newBoard);
        addBoardToProject(projectId, newBoard);
        setTitle("");
        setDescription("");
        toast.success("Board created successfully!");
      }
    } catch (error: any) {
      if (error.response?.status === 403) {
        toast.error("You do not have permission to create a board.");
      } else {
        toast.error("Failed to create board." + (error as any).message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group flex min-h-[166px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-900/45 px-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-slate-800/70">
          <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-slate-900/70 text-blue-200 transition-colors group-hover:border-blue-300/45 group-hover:bg-blue-500/18">
            <Plus className="h-5 w-5" />
          </span>
          <p className="text-sm font-semibold text-slate-100">Create new board</p>
          <p className="mt-1 text-xs text-slate-400">Start planning in a fresh board.</p>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[460px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New Board</DialogTitle>
            <DialogDescription>Add a board to this workspace for a new stream of work.</DialogDescription>
          </DialogHeader>

          <div className="mt-5 grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="board-title" className="text-slate-200">
                Board title
              </Label>
              <Input
                id="board-title"
                placeholder="Sprint Planning"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="board-description" className="text-slate-200">
                Description
              </Label>
              <Textarea
                id="board-description"
                placeholder="Capture goals, tasks, and ownership for this board."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create board"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
