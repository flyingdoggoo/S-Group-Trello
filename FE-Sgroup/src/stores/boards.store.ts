import { create } from 'zustand';

interface Board {
  id: string;
  title: string;
  description: string | null;
}

interface BoardsByProject {
  [projectId: string]: Board[];
}

interface BoardsStore {
  boardsByProject: BoardsByProject;
  
  setBoards: (projectId: string, boards: Board[]) => void;
  addBoard: (projectId: string, board: Board) => void;
  getBoards: (projectId: string) => Board[];
  clearBoards: (projectId: string) => void;
}

export const useBoardsStore = create<BoardsStore>((set, get) => ({
  boardsByProject: {},
  
  setBoards: (projectId, boards) => set((state) => ({
    boardsByProject: {
      ...state.boardsByProject,
      [projectId]: boards
    }
  })),
  
  addBoard: (projectId, board) => set((state) => ({
    boardsByProject: {
      ...state.boardsByProject,
      [projectId]: [...(state.boardsByProject[projectId] || []), board]
    }
  })),
  
  getBoards: (projectId) => {
    return get().boardsByProject[projectId] || [];
  },
  
  clearBoards: (projectId) => set((state) => {
    const newBoardsByProject = { ...state.boardsByProject };
    delete newBoardsByProject[projectId];
    return { boardsByProject: newBoardsByProject };
  }),
}));
