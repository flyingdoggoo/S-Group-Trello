import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ListUncheckedCreateWithoutCardInputSchema: z.ZodType<Prisma.ListUncheckedCreateWithoutCardInput> = z.strictObject({
  id: z.uuid().optional(),
  boardId: z.string(),
  title: z.string(),
  position: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
});

export default ListUncheckedCreateWithoutCardInputSchema;
