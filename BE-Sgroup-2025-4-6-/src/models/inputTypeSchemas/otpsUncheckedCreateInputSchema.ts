import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const otpsUncheckedCreateInputSchema: z.ZodType<Prisma.otpsUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  otp: z.string(),
  expiresAt: z.coerce.date(),
});

export default otpsUncheckedCreateInputSchema;
