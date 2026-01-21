import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';
import { projectCreateNestedOneWithoutInvitationInputSchema } from './projectCreateNestedOneWithoutInvitationInputSchema';
import { BoardCreateNestedOneWithoutInvitationInputSchema } from './BoardCreateNestedOneWithoutInvitationInputSchema';

export const InvitationsCreateWithoutOwnerInputSchema: z.ZodType<Prisma.InvitationsCreateWithoutOwnerInput> = z.strictObject({
  id: z.uuid().optional(),
  email: z.string(),
  roleId: z.string(),
  token: z.string(),
  status: z.lazy(() => InvitationStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  acceptedAt: z.coerce.date().optional().nullable(),
  project: z.lazy(() => projectCreateNestedOneWithoutInvitationInputSchema).optional(),
  board: z.lazy(() => BoardCreateNestedOneWithoutInvitationInputSchema).optional(),
});

export default InvitationsCreateWithoutOwnerInputSchema;
