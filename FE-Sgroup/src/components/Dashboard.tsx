import useProjects from "@/hooks/useProjects";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layouts/Sidebar";
import { ProjectModalCreate } from "@/components/ui/project.modal.create";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { BoardModalCreate } from "@/components/ui/board.modal.create";
import "react-toastify/dist/ReactToastify.css";

export function Dashboard() {
  const { projects, error } = useProjects();
  console.log("Projects in Dashboard:", projects);
  return (
    <div>
      <ToastContainer />
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-500 mb-4">
                Manage your workspaces and boards
              </p>
            </div>
            <ProjectModalCreate />
          </div>
          {error && <div className="text-red-500 mb-2">{error} hehe</div>}

          <div className="flex flex-col gap-4">
            {projects.map((project: any) => (
              <div key={project.id} className="">
                <div>
                  <div>
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ opacity: 1 }}
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="3"
                          rx="2"
                          ry="2"
                        />
                        <path d="M7 7h3v9H7zm7 0h3v5h-3z" />
                      </svg>
                      <span className="text-xl font-semibold">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                  <p className="text-gray-500 text-xs">
                    {project.boardCount || 0} Boards
                  </p>
                </div>
                <div className="mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {project.boards &&
                      project.boards.map((board: any) => (
                        <Link
                          key={board.id}
                          to={`/projects/${project.id}/boards/${board.id}/lists`}
                          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer max-w-sm"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-kanban h-4 w-4"
                              aria-hidden="true"
                            >
                              <path d="M5 3v14"></path>
                              <path d="M12 3v8"></path>
                              <path d="M19 3v18"></path>
                            </svg>
                            <h2 className="text-lg font-semibold">
                              {board.title}
                            </h2>
                          </div>
                          <p className="text-gray-600">{board.description}</p>
                        </Link>
                      ))}
                    <BoardModalCreate projectId={project.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
