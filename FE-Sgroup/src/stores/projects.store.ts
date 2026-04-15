import { create } from "zustand";

interface Board {
  id: string;
  slug?: string;
  title: string;
  description: string | null;
}

interface Project {
  id: string;
  slug?: string;
  title: string;
  description: string;
  boardCount?: number;

  memberCount?: number;

  boards?: Board[];
}

interface ProjectsStore {
  projects: Project[];
  memberCount?: number;
  isLoading: boolean;
  error: string | null;

  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  addBoardToProject: (projectId: string, board: Board) => void;
  updateBoardInProject: (projectId: string, boardId: string, updates: Partial<Board>) => void;
  removeBoardFromProject: (projectId: string, boardId: string) => void;
  updateProjectBoardCount: (projectId: string, count: number) => void;
  updateProjectMemberCount: (projectId: string, count: number) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useProjectsStore = create<ProjectsStore>((set) => ({
  projects: [],
  memberCount: 0,
  isLoading: false,
  error: null,

  setProjects: (projects) => set({ projects, error: null }),

  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, project],
    })),
  updateProjectBoardCount: (projectId, count) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId ? { ...p, boardCount: count } : p
      ),
    })),
  updateProjectMemberCount: (projectId, count) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId ? { ...p, memberCount: count } : p
      ),
    })),

  addBoardToProject: (projectId, board) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              boards: [...(p.boards || []), board],
              boardCount: (p.boardCount || 0) + 1,
            }
          : p
      ),
    })),

  updateBoardInProject: (projectId, boardId, updates) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              boards: (p.boards || []).map((board) =>
                board.id === boardId ? { ...board, ...updates } : board
              ),
            }
          : p
      ),
    })),

  removeBoardFromProject: (projectId, boardId) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              boards: (p.boards || []).filter((board) => board.id !== boardId),
              boardCount: Math.max((p.boardCount || 0) - 1, 0),
            }
          : p
      ),
    })),

  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
