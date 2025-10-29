import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const tokensUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.tokensUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  refreshToken: z.string(),
});

export default tokensUncheckedCreateWithoutUserInputSchema;
