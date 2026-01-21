import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberWhereUniqueInputSchema } from './CardMemberWhereUniqueInputSchema';
import { CardMemberCreateWithoutCardInputSchema } from './CardMemberCreateWithoutCardInputSchema';
import { CardMemberUncheckedCreateWithoutCardInputSchema } from './CardMemberUncheckedCreateWithoutCardInputSchema';

export const CardMemberCreateOrConnectWithoutCardInputSchema: z.ZodType<Prisma.CardMemberCreateOrConnectWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardMemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardMemberCreateWithoutCardInputSchema), z.lazy(() => CardMemberUncheckedCreateWithoutCardInputSchema) ]),
});

export default CardMemberCreateOrConnectWithoutCardInputSchema;
