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
import { useState } from "react";
import { apiClient } from "@/api/apiClient";
import { toast } from "react-toastify";
import { Plus } from "lucide-react";

export function ListModalCreate({
  boardId,
  lists,
  setLists,
}: {
  boardId: string;
  lists: any[];
  setLists: (v: any) => void;
}) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);

    try {
      const position = lists.length;
      const response = await apiClient.post("lists", {
        boardId,
        title,
        position,
      });
      if (response.data?.data) {
        setLists([...lists, response.data.data]);
        setTitle("");
        toast.success("List created successfully!");
      }
    } catch (error: any) {
      if (error.response?.status === 403) {
        toast.error("You do not have permission to create a list.");
      } else {
        toast.error("Failed to create list. " + (error?.message || ""));
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex min-h-[150px] w-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-slate-900/45 px-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-slate-800/70">
          <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-slate-900/70 text-blue-200">
            <Plus className="h-5 w-5" />
          </span>
          <p className="text-sm font-semibold text-slate-100">Add list</p>
          <p className="mt-1 text-xs text-slate-400">Create another column in this board.</p>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[420px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New List</DialogTitle>
            <DialogDescription>Enter a title for the new list column.</DialogDescription>
          </DialogHeader>

          <div className="mt-5 grid gap-2">
            <Label htmlFor="list-title" className="text-slate-200">
              List title
            </Label>
            <Input
              id="list-title"
              placeholder="In Review"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create list"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
