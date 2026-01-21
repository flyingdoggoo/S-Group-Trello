import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardCreateWithoutMembersInputSchema } from './CardCreateWithoutMembersInputSchema';
import { CardUncheckedCreateWithoutMembersInputSchema } from './CardUncheckedCreateWithoutMembersInputSchema';

export const CardCreateOrConnectWithoutMembersInputSchema: z.ZodType<Prisma.CardCreateOrConnectWithoutMembersInput> = z.strictObject({
  where: z.lazy(() => CardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardCreateWithoutMembersInputSchema), z.lazy(() => CardUncheckedCreateWithoutMembersInputSchema) ]),
});

export default CardCreateOrConnectWithoutMembersInputSchema;
