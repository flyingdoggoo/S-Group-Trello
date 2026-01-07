import { create } from 'zustand';

interface Board {
  id: string;
  title: string;
  description: string | null;
}

interface Project {
  id: string;
  title: string;
  description: string;
  boardCount?: number;
  boards?: Board[];
}

interface ProjectsStore {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  addBoardToProject: (projectId: string, board: Board) => void;
  updateProjectBoardCount: (projectId: string, count: number) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useProjectsStore = create<ProjectsStore>((set) => ({
  projects: [],
  isLoading: false,
  error: null,
  
  setProjects: (projects) => set({ projects, error: null }),
  addProject: (project) => set((state) => ({ 
    projects: [...state.projects, project] 
  })),
  addBoardToProject: (projectId, board) => set((state) => ({
    projects: state.projects.map(p => 
      p.id === projectId 
        ? { ...p, boards: [...(p.boards || []), board], boardCount: (p.boardCount || 0) + 1 }
        : p
    )
  })),
  updateProjectBoardCount: (projectId, count) => set((state) => ({
    projects: state.projects.map(p => 
      p.id === projectId ? { ...p, boardCount: count } : p
    )
  })),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
