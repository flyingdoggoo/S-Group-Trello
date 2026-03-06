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
      className={`sticky top-0 self-start flex flex-col bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 h-screen transition-all duration-300 z-40 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700/50">
        {!collapsed && (
          <Link to="/dashboard">  
            <h2 className="text-lg font-semibold flex items-center gap-2 text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
              <FontAwesomeIcon
                icon={faTrello}
                className="text-3xl text-blue-400"
              />
              Trello
            </h2>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600 transition-colors ${
            collapsed ? "mx-auto" : ""
          }`}
        >
          <Menu className="h-5 w-5 text-slate-500 dark:text-slate-400" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col py-4 overflow-y-auto">
        {/* Navigation Section */}
        {!collapsed && (
          <div className="px-4 mb-2">
            <h3 className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
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
                  ? "bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-white font-medium border-r-2 border-blue-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
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
            <h3 className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
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
                  ? "bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-white font-medium border-r-2 border-blue-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <div className="flex items-center">
                {item.icon}
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </div>
              {!collapsed && item.count && (
                <span className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{item.count}</span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Context Menu */}
      {contextMenu?.visible && (
        <div
          className="fixed bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-1 z-50 min-w-[140px]"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => handleDeleteProject(contextMenu.projectId)}
            className="w-full px-4 py-2 text-left text-sm text-red-500 dark:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Delete
          </button>
          <button
            onClick={() => setContextMenu(null)}
            className="w-full px-4 py-2 text-left text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      )}
      <DropUpSettings collapsed={collapsed} />
    </div>
  );
}
