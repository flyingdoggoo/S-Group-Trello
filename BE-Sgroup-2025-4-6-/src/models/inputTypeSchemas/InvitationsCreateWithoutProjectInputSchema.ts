import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';
import { usersCreateNestedOneWithoutInvitationsInputSchema } from './usersCreateNestedOneWithoutInvitationsInputSchema';
import { BoardCreateNestedOneWithoutInvitationInputSchema } from './BoardCreateNestedOneWithoutInvitationInputSchema';

export const InvitationsCreateWithoutProjectInputSchema: z.ZodType<Prisma.InvitationsCreateWithoutProjectInput> = z.strictObject({
  id: z.uuid().optional(),
  email: z.string(),
  roleId: z.string(),
  token: z.string(),
  status: z.lazy(() => InvitationStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  acceptedAt: z.coerce.date().optional().nullable(),
  owner: z.lazy(() => usersCreateNestedOneWithoutInvitationsInputSchema),
  board: z.lazy(() => BoardCreateNestedOneWithoutInvitationInputSchema).optional(),
});

export default InvitationsCreateWithoutProjectInputSchema;
