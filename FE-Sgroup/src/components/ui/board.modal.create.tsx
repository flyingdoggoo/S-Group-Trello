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
import axios from "axios"
import { toast } from "react-toastify"
export function BoardModalCreate({ projectId, boards, setBoards }: { projectId: string; boards: any; setBoards: any }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      const accessToken = localStorage.getItem("accessToken")
      console.log(accessToken)
      const response = await axios.post(`http://localhost:8000/projects/${projectId}/boards`, {
        title,
        description
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      if (response.data && response.data.data) {
        setTitle("")
        setDescription("")
        let newBoard = response.data.data
        setBoards([...boards, newBoard])
        toast.success("Board created successfully!")
      }
    } catch (error : any) {
      if(error.response?.status === 403){
        toast.error("You do not have permission to create a board.")
      }
      else {
        toast.error("Failed to create board." + (error as any).message)
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
            <button className="text-gray-600 font-medium">Create a new board</button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form className="dialog-form" onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Create New Board</DialogTitle>
              <DialogDescription>
                Fill in the details below to create a new board.
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
              <div className="grid gap-3">
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
