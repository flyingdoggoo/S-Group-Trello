import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutOtpsInputSchema } from './usersCreateNestedOneWithoutOtpsInputSchema';

export const otpsCreateInputSchema: z.ZodType<Prisma.otpsCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  otp: z.string(),
  expiresAt: z.coerce.date(),
  user: z.lazy(() => usersCreateNestedOneWithoutOtpsInputSchema),
});

export default otpsCreateInputSchema;
