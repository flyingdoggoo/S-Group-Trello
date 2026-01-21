import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListStatusEnumSchema } from './ListStatusEnumSchema';

export const ListCreateManyInputSchema: z.ZodType<Prisma.ListCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  boardId: z.string(),
  title: z.string(),
  position: z.number().int(),
  status: z.lazy(() => ListStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
});

export default ListCreateManyInputSchema;
