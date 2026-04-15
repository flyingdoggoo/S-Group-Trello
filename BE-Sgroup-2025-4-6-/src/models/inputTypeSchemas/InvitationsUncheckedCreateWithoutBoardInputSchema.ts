import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';
import { NotificationUncheckedCreateNestedManyWithoutInvitationInputSchema } from './NotificationUncheckedCreateNestedManyWithoutInvitationInputSchema';

export const InvitationsUncheckedCreateWithoutBoardInputSchema: z.ZodType<Prisma.InvitationsUncheckedCreateWithoutBoardInput> = z.strictObject({
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
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutInvitationInputSchema).optional(),
});

export default InvitationsUncheckedCreateWithoutBoardInputSchema;
