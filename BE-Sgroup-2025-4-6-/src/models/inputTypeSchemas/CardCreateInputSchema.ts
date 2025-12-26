import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';
import { ListCreateNestedOneWithoutCardInputSchema } from './ListCreateNestedOneWithoutCardInputSchema';

export const CardCreateInputSchema: z.ZodType<Prisma.CardCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  position: z.number().int(),
  status: z.lazy(() => CardStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  list: z.lazy(() => ListCreateNestedOneWithoutCardInputSchema),
});

export default CardCreateInputSchema;
