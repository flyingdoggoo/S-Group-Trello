import { create } from 'zustand';

interface Project {
  id: string;
  title: string;
  description: string;
  boardCount?: number;
}

interface ProjectsStore {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
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
  updateProjectBoardCount: (projectId, count) => set((state) => ({
    projects: state.projects.map(p => 
      p.id === projectId ? { ...p, boardCount: count } : p
    )
  })),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
