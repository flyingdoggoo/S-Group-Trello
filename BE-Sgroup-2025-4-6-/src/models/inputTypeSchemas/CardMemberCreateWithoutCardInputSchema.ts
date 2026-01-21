import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutCardMemberInputSchema } from './usersCreateNestedOneWithoutCardMemberInputSchema';

export const CardMemberCreateWithoutCardInputSchema: z.ZodType<Prisma.CardMemberCreateWithoutCardInput> = z.strictObject({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutCardMemberInputSchema),
});

export default CardMemberCreateWithoutCardInputSchema;
