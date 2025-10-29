import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const otpsCreateManyInputSchema: z.ZodType<Prisma.otpsCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  otp: z.string(),
  expiresAt: z.coerce.date(),
});

export default otpsCreateManyInputSchema;
