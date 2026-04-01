import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, Sun, Moon, Github, LogOut } from "lucide-react";
import { useThemeStore } from "@/stores/theme.store";

interface DropUpSettingsProps {
  collapsed: boolean;
}

export function DropUpSettings({ collapsed }: DropUpSettingsProps) {
  const { theme, toggleTheme } = useThemeStore();

  function logout() {
    localStorage.removeItem("accessToken");
    window.location.href = "/";
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`mt-auto border-t border-white/10 p-3 ${
            collapsed ? "flex justify-center" : ""
          }`}
        >
          <button
            className={`group flex items-center rounded-xl border border-transparent px-3 py-2 text-sm text-slate-300 transition-all hover:border-white/10 hover:bg-slate-800/70 hover:text-white ${
              collapsed ? "justify-center px-2" : "w-full"
            }`}
          >
            <Settings className="h-4 w-4 text-slate-400 group-hover:text-slate-200" />
            {!collapsed && <span className="ml-2.5">Settings</span>}
          </button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-48 rounded-xl border border-white/12 bg-slate-900/92 p-1.5 text-slate-100 backdrop-blur-xl"
        align="start"
        side="top"
      >
        <DropdownMenuItem className="cursor-pointer gap-2 rounded-lg py-2" onClick={toggleTheme}>
          {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          {theme === "light" ? "Dark mode" : "Light mode"}
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem className="cursor-pointer gap-2 rounded-lg py-2" asChild>
          <a href="https://github.com/flyingdoggoo/S-Group-Trello" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem
          className="cursor-pointer gap-2 rounded-lg py-2 text-red-300 focus:text-red-200"
          onClick={logout}
        >
          <LogOut className="h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
