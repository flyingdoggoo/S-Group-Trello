import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';
import { EnumInvitationStatusEnumFieldUpdateOperationsInputSchema } from './EnumInvitationStatusEnumFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutInvitationsNestedInputSchema } from './usersUpdateOneRequiredWithoutInvitationsNestedInputSchema';
import { BoardUpdateOneWithoutInvitationNestedInputSchema } from './BoardUpdateOneWithoutInvitationNestedInputSchema';

export const InvitationsUpdateWithoutProjectInputSchema: z.ZodType<Prisma.InvitationsUpdateWithoutProjectInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => InvitationStatusEnumSchema), z.lazy(() => EnumInvitationStatusEnumFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  acceptedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  owner: z.lazy(() => usersUpdateOneRequiredWithoutInvitationsNestedInputSchema).optional(),
  board: z.lazy(() => BoardUpdateOneWithoutInvitationNestedInputSchema).optional(),
});

export default InvitationsUpdateWithoutProjectInputSchema;
