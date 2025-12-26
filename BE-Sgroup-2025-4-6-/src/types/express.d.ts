// Type augmentation for Express to include our authenticated user shape
// This lets us safely access req.user.id in controllers after verifyToken

import type { socialAccountsWithPartialRelations } from '@/models';

declare global {
  namespace Express {
    // Minimal fields we rely on across the app; extend as needed
    interface User {
      id: string;
      email?: string;
      name?: string;
      // When authenticating via social providers we may attach extra info
      socialAccountInformation?: socialAccountsWithPartialRelations;
    }

    interface Request {
      user?: User;
    }
  }
}

export {};
