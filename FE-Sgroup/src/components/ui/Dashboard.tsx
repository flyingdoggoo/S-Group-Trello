import axios from "axios"
import { useState, useEffect } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Dashboard() {
  const [projects, setProjects] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      if (!axios.defaults.headers.common["Authorization"]) {
        const token = localStorage.getItem("accessToken")
        if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
      }

      const response = await axios.get("http://localhost:8000/projects")
      setProjects(response.data.data.data)
    }

    fetchProjects().catch(e => {
      setError(e?.response?.data?.message || e.message)
      console.error(e)
    })
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-500 mb-4">Your Projects</p>

      {error && <div className="text-red-500 mb-2">{error}</div>}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {projects.map((project: any) => (
              <TableRow key={project.id}>
                <TableCell>{project.id}</TableCell>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>{new Date(project.createdAt).toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    View →
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Separator className="my-6" />
    </div>
  )
}
