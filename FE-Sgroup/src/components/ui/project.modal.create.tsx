import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { toast } from "react-toastify"
import { apiClient } from "@/api/apiClient"
export function ProjectModalCreate({ projects, setProjects }: { projects: any; setProjects: any }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const response = await apiClient.post("projects", {
        title,
        description
      })
      if (response.data && response.data.data) {
        setTitle("")
        setDescription("")
        let newProject = response.data.data
        console.log("New project:", newProject)
        console.log("Current projects:", projects)
        setProjects([...projects, newProject])
        toast.success("Project created successfully!")
      }
    } catch (error : any) {
      if(error.response?.status === 403){
        toast.error("You do not have permission to create a project.")
      }
      else {
        toast.error("Failed to create project." + (error as any).message)
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-5 hover:bg-gray-50 cursor-pointer transition">
            <span className="text-3xl text-gray-400 mb-2">+</span>
            <button className="text-gray-600 font-medium">Create a new project</button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form className="dialog-form" onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new project.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Title</Label>
                <Input id="name-1" name="name" placeholder="Project Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid gap-3 mb-4">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Project Description"
                  className="resize-none"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={loading}>
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>

  )
}
