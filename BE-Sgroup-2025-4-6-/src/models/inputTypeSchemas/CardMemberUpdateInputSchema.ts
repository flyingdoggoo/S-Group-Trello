import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CardUpdateOneRequiredWithoutMembersNestedInputSchema } from './CardUpdateOneRequiredWithoutMembersNestedInputSchema';
import { usersUpdateOneRequiredWithoutCardMemberNestedInputSchema } from './usersUpdateOneRequiredWithoutCardMemberNestedInputSchema';

export const CardMemberUpdateInputSchema: z.ZodType<Prisma.CardMemberUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  card: z.lazy(() => CardUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutCardMemberNestedInputSchema).optional(),
});

export default CardMemberUpdateInputSchema;
