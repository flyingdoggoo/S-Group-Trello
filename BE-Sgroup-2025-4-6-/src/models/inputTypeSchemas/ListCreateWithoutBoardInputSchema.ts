import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListStatusEnumSchema } from './ListStatusEnumSchema';
import { CardCreateNestedManyWithoutListInputSchema } from './CardCreateNestedManyWithoutListInputSchema';

export const ListCreateWithoutBoardInputSchema: z.ZodType<Prisma.ListCreateWithoutBoardInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  position: z.number().int(),
  status: z.lazy(() => ListStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  Card: z.lazy(() => CardCreateNestedManyWithoutListInputSchema).optional(),
});

export default ListCreateWithoutBoardInputSchema;
