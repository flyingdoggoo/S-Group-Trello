import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';
import { usersCreateNestedOneWithoutInvitationsInputSchema } from './usersCreateNestedOneWithoutInvitationsInputSchema';
import { projectCreateNestedOneWithoutInvitationInputSchema } from './projectCreateNestedOneWithoutInvitationInputSchema';
import { BoardCreateNestedOneWithoutInvitationInputSchema } from './BoardCreateNestedOneWithoutInvitationInputSchema';

export const InvitationsCreateInputSchema: z.ZodType<Prisma.InvitationsCreateInput> = z.strictObject({
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
  board: z.lazy(() => BoardCreateNestedOneWithoutInvitationInputSchema).optional(),
});

export default InvitationsCreateInputSchema;
