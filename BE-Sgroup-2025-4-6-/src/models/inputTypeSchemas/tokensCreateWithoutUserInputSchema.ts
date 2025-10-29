import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const tokensCreateWithoutUserInputSchema: z.ZodType<Prisma.tokensCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  refreshToken: z.string(),
});

export default tokensCreateWithoutUserInputSchema;
