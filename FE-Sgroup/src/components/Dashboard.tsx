import { Button } from "@/components/ui/button"
import useProjects from "@/hooks/useProjects"
import { LoaderCircle } from "lucide-react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layouts/Sidebar"
import { ProjectModalCreate } from "@/components/ui/project.modal.create"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function Dashboard() {
  const { projects, setProjects, error } = useProjects()

  return (
    <div>
      <ToastContainer />
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500 mb-4">Manage your boards and projects</p>
          {error && <div className="text-red-500 mb-2">{error}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: any) => (
              <div key={project.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            ))}
            <ProjectModalCreate projects={projects} setProjects={setProjects} />
          </div>

        </main>
      </SidebarProvider>

    </div>
  )
}
