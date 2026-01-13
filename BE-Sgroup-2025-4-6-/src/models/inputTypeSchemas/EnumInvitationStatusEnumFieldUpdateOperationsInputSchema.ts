import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';

export const EnumInvitationStatusEnumFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumInvitationStatusEnumFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => InvitationStatusEnumSchema).optional(),
});

export default EnumInvitationStatusEnumFieldUpdateOperationsInputSchema;
