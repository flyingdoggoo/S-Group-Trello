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
import { useState } from "react"
import axios from "axios"
import { apiClient } from "@/api/apiClient"
import { toast } from "react-toastify"

export function ListModalCreate({ projectId, boardId, lists, setLists }: { projectId: string; boardId: string; lists: any[]; setLists: (v: any) => void }) {
  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    setLoading(true)
    try {
      const position = lists.length
      const response = await apiClient.post(`projects/${projectId}/boards/${boardId}/lists`, {
        title,
        position,
      })
      if (response.data && response.data.data) {
        const newList = response.data.data
        setLists([...lists, newList])
        setTitle("")
        toast.success("List created successfully!")
      }
    } catch (error: any) {
      if (error.response?.status === 403) {
        toast.error("You do not have permission to create a list.")
      } else {
        toast.error("Failed to create list. " + (error?.message || ""))
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">+ Add List</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form className="dialog-form" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New List</DialogTitle>
            <DialogDescription>
              Enter a title to create a new list in this board.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mb-4">
            <div className="grid gap-3">
              <Label htmlFor="list-title">Title</Label>
              <Input id="list-title" placeholder="List Title" value={title} onChange={(e) => setTitle(e.target.value)} />
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
  )
}
