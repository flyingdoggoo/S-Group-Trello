import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateWithoutMembersInputSchema } from './CardCreateWithoutMembersInputSchema';
import { CardUncheckedCreateWithoutMembersInputSchema } from './CardUncheckedCreateWithoutMembersInputSchema';
import { CardCreateOrConnectWithoutMembersInputSchema } from './CardCreateOrConnectWithoutMembersInputSchema';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';

export const CardCreateNestedOneWithoutMembersInputSchema: z.ZodType<Prisma.CardCreateNestedOneWithoutMembersInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCreateWithoutMembersInputSchema), z.lazy(() => CardUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CardCreateOrConnectWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => CardWhereUniqueInputSchema).optional(),
});

export default CardCreateNestedOneWithoutMembersInputSchema;
