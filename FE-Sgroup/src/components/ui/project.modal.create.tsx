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
import { useProjectsStore } from "@/stores/projects.store";
import { Plus } from "lucide-react";

export function ProjectModalCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const addProject = useProjectsStore((state) => state.addProject);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiClient.post("projects", { title, description });
      if (response.data?.data) {
        addProject(response.data.data);
        setTitle("");
        setDescription("");
        toast.success("Workspace created successfully!");
      }
    } catch (error: any) {
      if (error.response?.status === 403) {
        toast.error("You do not have permission to create a workspace.");
      } else {
        const serverMessage = error?.response?.data?.message;
        toast.error(serverMessage || `Failed to create workspace. ${error?.message || ""}`);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-10 px-4">
          <Plus className="h-4 w-4" />
          Create workspace
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[460px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New Workspace</DialogTitle>
            <DialogDescription>Set up a workspace to group your boards by team, product, or initiative.</DialogDescription>
          </DialogHeader>

          <div className="mt-5 grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="workspace-title" className="text-slate-200">
                Workspace name
              </Label>
              <Input
                id="workspace-title"
                placeholder="Product Design Team"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="workspace-description" className="text-slate-200">
                Description
              </Label>
              <Textarea
                id="workspace-description"
                placeholder="What kind of work will this workspace manage?"
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
              {loading ? "Creating..." : "Create workspace"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
