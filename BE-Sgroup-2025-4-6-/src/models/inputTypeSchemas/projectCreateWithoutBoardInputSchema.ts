import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectStatusEnumSchema } from './ProjectStatusEnumSchema';
import { ProjectMemberCreateNestedManyWithoutProjectInputSchema } from './ProjectMemberCreateNestedManyWithoutProjectInputSchema';
import { InvitationsCreateNestedManyWithoutProjectInputSchema } from './InvitationsCreateNestedManyWithoutProjectInputSchema';

export const projectCreateWithoutBoardInputSchema: z.ZodType<Prisma.projectCreateWithoutBoardInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => ProjectStatusEnumSchema).optional(),
  members: z.lazy(() => ProjectMemberCreateNestedManyWithoutProjectInputSchema).optional(),
  invitation: z.lazy(() => InvitationsCreateNestedManyWithoutProjectInputSchema).optional(),
});

export default projectCreateWithoutBoardInputSchema;
