// Type augmentation for Express to include our authenticated user shape
// This lets us safely access req.user.id in controllers after verifyToken

declare global {
  namespace Express {
    // Minimal fields we rely on across the app; extend as needed
    interface User {
      id: string;
      email?: string;
      name?: string;
    }

    interface Request {
      user?: User;
    }
  }
}

export {};
