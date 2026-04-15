import { create } from 'zustand';

interface Board {
  id: string;
  slug?: string;
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
  updateBoard: (projectId: string, boardId: string, updates: Partial<Board>) => void;
  removeBoard: (projectId: string, boardId: string) => void;
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

  updateBoard: (projectId, boardId, updates) => set((state) => ({
    boardsByProject: {
      ...state.boardsByProject,
      [projectId]: (state.boardsByProject[projectId] || []).map((board) =>
        board.id === boardId ? { ...board, ...updates } : board
      )
    }
  })),

  removeBoard: (projectId, boardId) => set((state) => ({
    boardsByProject: {
      ...state.boardsByProject,
      [projectId]: (state.boardsByProject[projectId] || []).filter((board) => board.id !== boardId)
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
