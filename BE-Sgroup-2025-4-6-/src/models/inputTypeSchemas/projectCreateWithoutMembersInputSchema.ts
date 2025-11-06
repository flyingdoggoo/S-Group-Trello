import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectStatusEnumSchema } from './ProjectStatusEnumSchema';
import { BoardCreateNestedManyWithoutProjectInputSchema } from './BoardCreateNestedManyWithoutProjectInputSchema';

export const projectCreateWithoutMembersInputSchema: z.ZodType<Prisma.projectCreateWithoutMembersInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => ProjectStatusEnumSchema).optional(),
  Board: z.lazy(() => BoardCreateNestedManyWithoutProjectInputSchema).optional(),
});

export default projectCreateWithoutMembersInputSchema;
