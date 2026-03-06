import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Settings, Sun, Moon, Github, LogOut } from "lucide-react"
import { useThemeStore } from "@/stores/theme.store"

export function DropUpSettings(collapsed: any) {
    const { theme, toggleTheme } = useThemeStore()

    function Logout() {
        localStorage.removeItem("accessToken")
        window.location.href = "/"
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className={`p-2 border-t border-slate-200 dark:border-slate-700/50 ${collapsed ? "flex justify-center" : ""}`}>
                    <button
                        className={`flex items-center w-full px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white rounded-md cursor-pointer transition-colors ${collapsed ? "justify-center" : ""
                            }`}
                    >
                        <Settings className="h-5 w-5" />
                        {!collapsed && <span className="ml-3">Settings</span>}
                    </button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="start" side="top">
                <DropdownMenuItem className="cursor-pointer gap-2" onClick={toggleTheme}>
                    {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    {theme === "light" ? "Dark mode" : "Light mode"}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer gap-2" asChild>
                    <a href="https://github.com/flyingdoggoo/S-Group-Trello" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                    </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer gap-2 text-red-400 focus:text-red-400" onClick={Logout}>
                    <LogOut className="h-4 w-4" />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}