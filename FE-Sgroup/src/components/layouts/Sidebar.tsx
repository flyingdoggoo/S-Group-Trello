"use client";

import { useState, useEffect } from "react";
import { Home, Folder, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { DropUpSettings } from "../ui/drop-up.settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { useProjectsStore } from "@/stores/projects.store";
import { apiClient } from "@/api/apiClient";
import { toast } from "react-toastify";

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    projectId: string;
  } | null>(null);
  const location = useLocation();
  const { projects, setProjects } = useProjectsStore();

  useEffect(() => {
    const fetchProjects = async () => {
      if (projects.length === 0) {
        try {
          const response = await apiClient.get("/projects?limit=100");
          const projectsData = response.data.data.data;
          setProjects(projectsData);
        } catch (err) {
          console.error("Failed to fetch projects in sidebar:", err);
        }
      }
    };
    fetchProjects();
  }, [projects.length, setProjects]);

  // Close context menu on click outside
  useEffect(() => {
    const handleClick = () => setContextMenu(null);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleContextMenu = (e: React.MouseEvent, projectId: string) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      projectId,
    });
  };

  const handleDeleteProject = async (projectId: string) => {
    try {
      await apiClient.delete(`/projects/${projectId}`);
      toast.success("Project deleted successfully");
      // Remove from local state
      setProjects(projects.filter((p: any) => p.id !== projectId));
      setContextMenu(null);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to delete project");
      console.error(err);
    }
  };

  const navigationItems = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: <Home className="h-4 w-4" />,
    },
  ];

  // Map projects to workspace items with board count
  const workspaceItems = projects.map((project: any) => ({
    to: `/projects/${project.id}`,
    label: project.title,
    icon: <Folder className="h-4 w-4" />,
    count: project.boardCount,
  }));

  return (
    <div
      className={`sticky top-0 self-start flex flex-col bg-white border-r border-neutral-200 h-screen transition-all duration-300 z-40 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
        {!collapsed && (
          <Link to="/dashboard">  
            <h2 className="text-lg font-semibold flex items-center gap-2 text-black hover:opacity-70 transition-opacity">
              <FontAwesomeIcon
                icon={faTrello}
                className="text-3xl text-black"
              />
              Trello
            </h2>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-1.5 rounded-md hover:bg-neutral-100 active:bg-neutral-200 transition-colors ${
            collapsed ? "mx-auto" : ""
          }`}
        >
          <Menu className="h-5 w-5 text-neutral-600" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col py-4 overflow-y-auto">
        {/* Navigation Section */}
        {!collapsed && (
          <div className="px-4 mb-2">
            <h3 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
              Navigation
            </h3>
          </div>
        )}
        <div className="mb-4">
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center px-4 py-2 text-sm transition-colors ${
                collapsed ? "justify-center" : ""
              } ${
                location.pathname === item.to
                  ? "bg-neutral-100 text-black font-medium border-r-2 border-black"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
              }`}
            >
              {item.icon}
              {!collapsed && <span className="ml-3">{item.label}</span>}
            </Link>
          ))}
        </div>

        {/* Workspaces Section */}
        {!collapsed && (
          <div className="px-4 mb-2">
            <h3 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
              Workspaces
            </h3>
          </div>
        )}
        <div>
          {workspaceItems.map((item, index) => (
            <Link
              key={`${item.to}-${index}`}
              to={item.to}
              onContextMenu={(e) => handleContextMenu(e, projects[index].id)}
              className={`flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                collapsed ? "justify-center" : ""
              } ${
                location.pathname === item.to
                  ? "bg-neutral-100 text-black font-medium border-r-2 border-black"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
              }`}
            >
              <div className="flex items-center">
                {item.icon}
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </div>
              {!collapsed && item.count && (
                <span className="text-xs text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded">{item.count}</span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Context Menu */}
      {contextMenu?.visible && (
        <div
          className="fixed bg-white border border-neutral-200 rounded-lg shadow-lg py-1 z-50 min-w-[140px]"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => handleDeleteProject(contextMenu.projectId)}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-neutral-50 transition-colors"
          >
            Delete
          </button>
          <button
            onClick={() => setContextMenu(null)}
            className="w-full px-4 py-2 text-left text-sm text-neutral-600 hover:bg-neutral-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      )}
      <DropUpSettings collapsed={collapsed} />
    </div>
  );
}
