import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const tokensUncheckedCreateInputSchema: z.ZodType<Prisma.tokensUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  refreshToken: z.string(),
});

export default tokensUncheckedCreateInputSchema;
