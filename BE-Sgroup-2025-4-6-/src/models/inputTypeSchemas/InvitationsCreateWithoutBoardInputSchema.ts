import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';
import { usersCreateNestedOneWithoutInvitationsInputSchema } from './usersCreateNestedOneWithoutInvitationsInputSchema';
import { projectCreateNestedOneWithoutInvitationInputSchema } from './projectCreateNestedOneWithoutInvitationInputSchema';

export const InvitationsCreateWithoutBoardInputSchema: z.ZodType<Prisma.InvitationsCreateWithoutBoardInput> = z.strictObject({
  id: z.uuid().optional(),
  email: z.string(),
  roleId: z.string(),
  token: z.string(),
  status: z.lazy(() => InvitationStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  acceptedAt: z.coerce.date().optional().nullable(),
  owner: z.lazy(() => usersCreateNestedOneWithoutInvitationsInputSchema),
  project: z.lazy(() => projectCreateNestedOneWithoutInvitationInputSchema).optional(),
});

export default InvitationsCreateWithoutBoardInputSchema;
