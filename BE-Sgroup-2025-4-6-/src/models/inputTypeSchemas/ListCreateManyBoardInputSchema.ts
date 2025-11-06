import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ListCreateManyBoardInputSchema: z.ZodType<Prisma.ListCreateManyBoardInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  position: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
});

export default ListCreateManyBoardInputSchema;
