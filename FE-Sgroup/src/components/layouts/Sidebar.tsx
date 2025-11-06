"use client"

import { useState } from "react"
import { Home, Folder, Menu } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { DropUpSettings } from "../ui/drop-up.settings"
export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  const items = [
    { to: "/dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { to: "/projects", label: "Projects", icon: <Folder className="h-5 w-5" /> },
  ]

  return (
    <div
      className={`flex flex-col bg-white border-r h-screen transition-all duration-300 ${
        collapsed ? "w-16" : "w-56"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        {!collapsed && <h2 className="text-lg font-semibold">Menu</h2>}
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
      <div className="flex-1 flex flex-col py-2">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors ${
              collapsed ? "justify-center" : ""
            } ${location.pathname === item.to ? "bg-gray-200 font-medium" : ""}`}
          >
            {item.icon}
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </Link>
        ))}
      </div>

      {/* Footer */}
      <DropUpSettings collapsed={collapsed} />
    </div>
  )
}
