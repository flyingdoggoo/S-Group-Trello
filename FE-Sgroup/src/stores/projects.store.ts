import { create } from "zustand";

interface Project {
  id: string;
  title: string;
  description: string;
  boardCount?: number;
  memberCount?: number;
}

interface ProjectsStore {
  projects: Project[];
  memberCount?: number;
  isLoading: boolean;
  error: string | null;

  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
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
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));
