import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';

export const InvitationsUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.InvitationsUncheckedCreateWithoutProjectInput> = z.strictObject({
  id: z.uuid().optional(),
  boardId: z.string().optional().nullable(),
  email: z.string(),
  roleId: z.string(),
  token: z.string(),
  status: z.lazy(() => InvitationStatusEnumSchema).optional(),
  createdBy: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  acceptedAt: z.coerce.date().optional().nullable(),
});

export default InvitationsUncheckedCreateWithoutProjectInputSchema;
