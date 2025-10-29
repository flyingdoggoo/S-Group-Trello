import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const tokensCreateManyUserInputSchema: z.ZodType<Prisma.tokensCreateManyUserInput> = z.strictObject({
  id: z.uuid().optional(),
  refreshToken: z.string(),
});

export default tokensCreateManyUserInputSchema;
