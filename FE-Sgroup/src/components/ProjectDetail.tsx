import useBoards from "@/hooks/useBoards"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layouts/Sidebar"
import { BoardModalCreate } from "@/components/ui/board.modal.create"
import { ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
export default function ProjectDetail() {
  const projectId = useParams().id as string;
  const { boards, setBoards, error } = useBoards({ projectId });
  //lay id tren url
  console.log("Project ID:", projectId);
  console.log("Boards:", boards);
  return (
    <div>
      <ToastContainer />
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold">Boards Manager</h1>
          <p className="text-gray-500 mb-4">Manage your boards and projects</p>
          {error && <div className="text-red-500 mb-2">{error}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boards.map((board: any) => (
              <Link key={board.id} to={`/projects/${projectId}/boards/${board.id}/lists`} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">{board.title}</h2>
                <p className="text-gray-600 mb-4">{board.description}</p>
              </Link>
            ))}
            <BoardModalCreate projectId={projectId} boards={boards} setBoards={setBoards} />
          </div>

        </main>
      </SidebarProvider>

    </div>
  )
}
