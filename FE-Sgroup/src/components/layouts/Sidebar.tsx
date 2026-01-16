"use client";

import { useState, useEffect } from "react";
import { Home, Folder, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { DropUpSettings } from "../ui/drop-up.settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrello } from "@fortawesome/free-brands-svg-icons";
import { useProjectsStore } from "@/stores/projects.store";
import { apiClient } from "@/api/apiClient";

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { projects, setProjects } = useProjectsStore();

  useEffect(() => {
    const fetchProjects = async () => {
      if (projects.length === 0) {
        try {
          const response = await apiClient.get("/projects");
          const projectsData = response.data.data.data;
          setProjects(projectsData);
        } catch (err) {
          console.error("Failed to fetch projects in sidebar:", err);
        }
      }
    };
    fetchProjects();
  }, [projects.length, setProjects]);

  const navigationItems = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: <Home className="h-4 w-4" />,
    },
  ];

  // Map projects to workspace items with board count
  const workspaceItems = projects.map((project: any) => ({
    to: `/projects/${project.id}/boards`,
    label: project.title,
    icon: <Folder className="h-4 w-4" />,
    count: project.boardCount,
  }));

  return (
    <div
      className={`flex flex-col bg-white border-r h-screen transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        {!collapsed && (
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <FontAwesomeIcon
              icon={faTrello}
              style={{ color: "#1e5076" }}
              className="text-3xl"
            />
            Trello
          </h2>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-1 rounded-md hover:bg-gray-100 transition-colors ${
            collapsed ? "mx-auto" : ""
          }`}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col py-4 overflow-y-auto">
        {/* Navigation Section */}
        {!collapsed && (
          <div className="px-4 mb-2">
            <h3 className="text-xs font-semibold text-gray-500 tracking-wider">
              Navigation
            </h3>
          </div>
        )}
        <div className="mb-4">
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors ${
                collapsed ? "justify-center" : ""
              } ${
                location.pathname === item.to ? "bg-gray-200 font-medium" : ""
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
            <h3 className="text-xs font-semibold text-gray-500 tracking-wider">
              Workspaces
            </h3>
          </div>
        )}
        <div>
          {workspaceItems.map((item, index) => (
            <Link
              key={`${item.to}-${index}`}
              to={item.to}
              className={`flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors ${
                collapsed ? "justify-center" : ""
              } ${
                location.pathname === item.to ? "bg-gray-200 font-medium" : ""
              }`}
            >
              <div className="flex items-center fontsize-sm">
                {item.icon}
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </div>
              {!collapsed && item.count && (
                <span className="text-sm text-gray-500">{item.count}</span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <DropUpSettings collapsed={collapsed} />
    </div>
  );
}
