import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateNestedOneWithoutMembersInputSchema } from './CardCreateNestedOneWithoutMembersInputSchema';

export const CardMemberCreateWithoutUserInputSchema: z.ZodType<Prisma.CardMemberCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
  card: z.lazy(() => CardCreateNestedOneWithoutMembersInputSchema),
});

export default CardMemberCreateWithoutUserInputSchema;
