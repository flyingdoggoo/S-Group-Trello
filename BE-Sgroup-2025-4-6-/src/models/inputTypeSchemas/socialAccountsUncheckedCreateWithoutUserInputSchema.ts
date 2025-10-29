import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const socialAccountsUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.socialAccountsUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  googleId: z.string(),
  googleAccessToken: z.string(),
  googleRefreshToken: z.string(),
});

export default socialAccountsUncheckedCreateWithoutUserInputSchema;
