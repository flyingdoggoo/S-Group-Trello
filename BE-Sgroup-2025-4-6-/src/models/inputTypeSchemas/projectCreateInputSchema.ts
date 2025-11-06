import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectStatusEnumSchema } from './ProjectStatusEnumSchema';
import { ProjectMemberCreateNestedManyWithoutProjectInputSchema } from './ProjectMemberCreateNestedManyWithoutProjectInputSchema';
import { BoardCreateNestedManyWithoutProjectInputSchema } from './BoardCreateNestedManyWithoutProjectInputSchema';

export const projectCreateInputSchema: z.ZodType<Prisma.projectCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => ProjectStatusEnumSchema).optional(),
  members: z.lazy(() => ProjectMemberCreateNestedManyWithoutProjectInputSchema).optional(),
  Board: z.lazy(() => BoardCreateNestedManyWithoutProjectInputSchema).optional(),
});

export default projectCreateInputSchema;
