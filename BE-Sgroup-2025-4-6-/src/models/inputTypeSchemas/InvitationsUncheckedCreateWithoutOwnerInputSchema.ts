import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';

export const InvitationsUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.InvitationsUncheckedCreateWithoutOwnerInput> = z.strictObject({
  id: z.uuid().optional(),
  projectId: z.string().optional().nullable(),
  boardId: z.string().optional().nullable(),
  email: z.string(),
  roleId: z.string(),
  token: z.string(),
  status: z.lazy(() => InvitationStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  acceptedAt: z.coerce.date().optional().nullable(),
});

export default InvitationsUncheckedCreateWithoutOwnerInputSchema;
