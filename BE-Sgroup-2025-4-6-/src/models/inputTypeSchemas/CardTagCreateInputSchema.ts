import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateNestedOneWithoutTagsInputSchema } from './CardCreateNestedOneWithoutTagsInputSchema';

export const CardTagCreateInputSchema: z.ZodType<Prisma.CardTagCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  color: z.string(),
  createdAt: z.coerce.date().optional(),
  card: z.lazy(() => CardCreateNestedOneWithoutTagsInputSchema),
});

export default CardTagCreateInputSchema;
