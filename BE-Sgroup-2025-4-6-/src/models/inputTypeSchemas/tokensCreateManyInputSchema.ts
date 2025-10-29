import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const tokensCreateManyInputSchema: z.ZodType<Prisma.tokensCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  refreshToken: z.string(),
});

export default tokensCreateManyInputSchema;
