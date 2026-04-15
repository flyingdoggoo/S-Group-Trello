"use client";

import { useState, useEffect, useMemo } from "react";
import { LayoutGrid, FolderKanban, Folder, PanelLeftClose, PanelLeftOpen, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { DropUpSettings } from "../ui/drop-up.settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { useProjectsStore } from "@/stores/projects.store";
import { apiClient } from "@/api/apiClient";
import { toast } from "react-toastify";
import { NotificationBell } from "@/components/shared/notifications/NotificationBell";
import { getEntityRouteIdentifier } from "@/lib/entityIdentifiers";

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
    async function fetchProjects() {
      if (projects.length > 0) return;
      try {
        const response = await apiClient.get("/projects?limit=100");
        setProjects(response.data.data.data);
      } catch (err) {
        console.error("Failed to fetch projects in sidebar:", err);
      }
    }
    fetchProjects();
  }, [projects.length, setProjects]);

  useEffect(() => {
    const closeContext = () => setContextMenu(null);
    document.addEventListener("click", closeContext);
    return () => document.removeEventListener("click", closeContext);
  }, []);

  const navigationItems = useMemo(
    () => [
      {
        to: "/dashboard",
        label: "Dashboard",
        icon: LayoutGrid,
        isActive: location.pathname === "/dashboard",
      },
      {
        to: "/projects",
        label: "Workspaces",
        icon: FolderKanban,
        isActive: location.pathname.startsWith("/projects") || location.pathname.startsWith("/boards"),
      },
      {
        to: "/notifications",
        label: "Notifications",
        icon: Bell,
        isActive: location.pathname.startsWith("/notifications"),
      },
    ],
    [location.pathname]
  );

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
      toast.success("Workspace deleted successfully");
      setProjects(projects.filter((project: any) => project.id !== projectId));
      setContextMenu(null);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to delete workspace");
      console.error(err);
    }
  };

  return (
    <aside
      className={`sticky top-0 z-40 flex h-screen flex-col border-r border-white/10 bg-slate-950/72 backdrop-blur-2xl transition-all duration-300 ${
        collapsed ? "w-[88px]" : "w-[280px]"
      }`}
    >
      <div className="divider-soft px-4 py-4">
        <div className={`flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>
          {!collapsed && (
            <Link to="/dashboard" className="group flex items-center gap-3">
              <div className="rounded-xl border border-blue-300/30 bg-blue-500/20 p-2 text-blue-200 transition-colors group-hover:bg-blue-500/28">
                <FontAwesomeIcon icon={faTrello} className="text-xl" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-100">Sgroup Boards</p>
                <p className="text-xs text-slate-400">Project workspace</p>
              </div>
            </Link>
          )}

          <div className={`flex items-center gap-2 ${collapsed ? "mx-auto flex-col" : ""}`}>
            <NotificationBell collapsed={collapsed} />
            <button
              onClick={() => setCollapsed((prev) => !prev)}
              className={`rounded-xl border border-white/10 bg-slate-900/65 p-2 text-slate-300 transition-all hover:border-blue-300/40 hover:bg-slate-800/80 hover:text-white ${
                collapsed ? "mx-auto" : ""
              }`}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        {!collapsed && (
          <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Navigation
          </p>
        )}

        <div className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`group relative flex items-center rounded-xl border px-3 py-2.5 text-sm transition-all ${
                  collapsed ? "justify-center" : "gap-3"
                } ${
                  item.isActive
                    ? "border-blue-300/40 bg-blue-500/18 text-blue-100 shadow-[0_10px_24px_-18px_rgba(59,130,246,0.9)]"
                    : "border-transparent text-slate-300 hover:border-white/10 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                <span
                  className={`absolute left-0 top-1/2 h-7 -translate-y-1/2 rounded-r-full transition-all ${
                    item.isActive ? "w-1.5 bg-blue-300" : "w-0 bg-transparent"
                  }`}
                />
                <Icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span className="font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </div>

        <div className="my-4 h-px bg-white/10" />

        {!collapsed && (
          <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Workspaces
          </p>
        )}

        <div className="space-y-1">
          {projects.map((project: any) => {
            const projectIdentifier = getEntityRouteIdentifier(project);
            const isActive = location.pathname === `/projects/${projectIdentifier}`;
            return (
              <Link
                key={project.id}
                to={`/projects/${projectIdentifier}`}
                onContextMenu={(e) => handleContextMenu(e, project.id)}
                className={`group flex items-center rounded-xl border px-3 py-2.5 text-sm transition-all ${
                  collapsed ? "justify-center" : "justify-between"
                } ${
                  isActive
                    ? "border-blue-300/35 bg-blue-500/14 text-blue-100"
                    : "border-transparent text-slate-300 hover:border-white/10 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                <span className={`flex min-w-0 items-center ${collapsed ? "" : "gap-3"}`}>
                  <Folder className="h-4 w-4 shrink-0" />
                  {!collapsed && <span className="truncate font-medium">{project.title}</span>}
                </span>
                {!collapsed && (
                  <span className="rounded-md border border-white/10 bg-slate-900/65 px-1.5 py-0.5 text-xs text-slate-400">
                    {project.boardCount || 0}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {contextMenu?.visible && (
        <div
          className="fixed z-50 min-w-[150px] rounded-xl border border-white/12 bg-slate-900/95 p-1.5 shadow-[0_18px_40px_-24px_rgba(2,6,23,0.95)] backdrop-blur-xl"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => handleDeleteProject(contextMenu.projectId)}
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-300 transition-colors hover:bg-red-400/10 hover:text-red-200"
          >
            Delete workspace
          </button>
          <button
            onClick={() => setContextMenu(null)}
            className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-slate-800/75 hover:text-white"
          >
            Cancel
          </button>
        </div>
      )}

      <DropUpSettings collapsed={collapsed} />
    </aside>
  );
}
