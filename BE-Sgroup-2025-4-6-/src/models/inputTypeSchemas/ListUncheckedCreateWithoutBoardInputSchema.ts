import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardUncheckedCreateNestedManyWithoutListInputSchema } from './CardUncheckedCreateNestedManyWithoutListInputSchema';

export const ListUncheckedCreateWithoutBoardInputSchema: z.ZodType<Prisma.ListUncheckedCreateWithoutBoardInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  position: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  Card: z.lazy(() => CardUncheckedCreateNestedManyWithoutListInputSchema).optional(),
});

export default ListUncheckedCreateWithoutBoardInputSchema;
