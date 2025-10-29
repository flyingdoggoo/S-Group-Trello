import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectStatusEnumSchema } from './ProjectStatusEnumSchema';

export const projectUncheckedCreateWithoutMembersInputSchema: z.ZodType<Prisma.projectUncheckedCreateWithoutMembersInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => ProjectStatusEnumSchema).optional(),
});

export default projectUncheckedCreateWithoutMembersInputSchema;
