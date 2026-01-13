import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';

export const InvitationsCreateManyBoardInputSchema: z.ZodType<Prisma.InvitationsCreateManyBoardInput> = z.strictObject({
  id: z.uuid().optional(),
  projectId: z.string().optional().nullable(),
  email: z.string(),
  roleId: z.string(),
  token: z.string(),
  status: z.lazy(() => InvitationStatusEnumSchema).optional(),
  createdBy: z.string(),
  createdAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  acceptedAt: z.coerce.date().optional().nullable(),
});

export default InvitationsCreateManyBoardInputSchema;
