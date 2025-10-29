import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const socialAccountsCreateManyInputSchema: z.ZodType<Prisma.socialAccountsCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  googleId: z.string(),
  googleAccessToken: z.string(),
  googleRefreshToken: z.string(),
});

export default socialAccountsCreateManyInputSchema;
