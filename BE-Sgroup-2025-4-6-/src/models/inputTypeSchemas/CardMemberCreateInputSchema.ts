import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateNestedOneWithoutMembersInputSchema } from './CardCreateNestedOneWithoutMembersInputSchema';
import { usersCreateNestedOneWithoutCardMemberInputSchema } from './usersCreateNestedOneWithoutCardMemberInputSchema';

export const CardMemberCreateInputSchema: z.ZodType<Prisma.CardMemberCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
  card: z.lazy(() => CardCreateNestedOneWithoutMembersInputSchema),
  user: z.lazy(() => usersCreateNestedOneWithoutCardMemberInputSchema),
});

export default CardMemberCreateInputSchema;
