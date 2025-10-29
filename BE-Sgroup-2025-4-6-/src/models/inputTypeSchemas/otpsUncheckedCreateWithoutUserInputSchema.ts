import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const otpsUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.otpsUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  otp: z.string(),
  expiresAt: z.coerce.date(),
});

export default otpsUncheckedCreateWithoutUserInputSchema;
