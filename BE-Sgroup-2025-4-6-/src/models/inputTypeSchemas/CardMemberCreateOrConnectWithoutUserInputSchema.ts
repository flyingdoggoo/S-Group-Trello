import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberWhereUniqueInputSchema } from './CardMemberWhereUniqueInputSchema';
import { CardMemberCreateWithoutUserInputSchema } from './CardMemberCreateWithoutUserInputSchema';
import { CardMemberUncheckedCreateWithoutUserInputSchema } from './CardMemberUncheckedCreateWithoutUserInputSchema';

export const CardMemberCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CardMemberCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => CardMemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardMemberCreateWithoutUserInputSchema), z.lazy(() => CardMemberUncheckedCreateWithoutUserInputSchema) ]),
});

export default CardMemberCreateOrConnectWithoutUserInputSchema;
