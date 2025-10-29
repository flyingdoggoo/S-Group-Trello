import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const socialAccountsCreateWithoutUserInputSchema: z.ZodType<Prisma.socialAccountsCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  googleId: z.string(),
  googleAccessToken: z.string(),
  googleRefreshToken: z.string(),
});

export default socialAccountsCreateWithoutUserInputSchema;
