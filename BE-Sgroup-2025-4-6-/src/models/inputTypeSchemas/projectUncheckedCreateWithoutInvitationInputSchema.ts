import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectStatusEnumSchema } from './ProjectStatusEnumSchema';
import { ProjectMemberUncheckedCreateNestedManyWithoutProjectInputSchema } from './ProjectMemberUncheckedCreateNestedManyWithoutProjectInputSchema';
import { BoardUncheckedCreateNestedManyWithoutProjectInputSchema } from './BoardUncheckedCreateNestedManyWithoutProjectInputSchema';

export const projectUncheckedCreateWithoutInvitationInputSchema: z.ZodType<Prisma.projectUncheckedCreateWithoutInvitationInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => ProjectStatusEnumSchema).optional(),
  members: z.lazy(() => ProjectMemberUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
  Board: z.lazy(() => BoardUncheckedCreateNestedManyWithoutProjectInputSchema).optional(),
});

export default projectUncheckedCreateWithoutInvitationInputSchema;
