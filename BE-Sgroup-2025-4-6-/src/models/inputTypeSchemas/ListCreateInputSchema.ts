import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateNestedOneWithoutListInputSchema } from './BoardCreateNestedOneWithoutListInputSchema';
import { CardCreateNestedManyWithoutListInputSchema } from './CardCreateNestedManyWithoutListInputSchema';

export const ListCreateInputSchema: z.ZodType<Prisma.ListCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  position: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  board: z.lazy(() => BoardCreateNestedOneWithoutListInputSchema),
  Card: z.lazy(() => CardCreateNestedManyWithoutListInputSchema).optional(),
});

export default ListCreateInputSchema;
