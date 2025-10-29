import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';

export const otpsOrderByWithRelationInputSchema: z.ZodType<Prisma.otpsOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  otp: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
});

export default otpsOrderByWithRelationInputSchema;
