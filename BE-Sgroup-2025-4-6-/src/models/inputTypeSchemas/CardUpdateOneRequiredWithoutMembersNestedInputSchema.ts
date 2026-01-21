import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateWithoutMembersInputSchema } from './CardCreateWithoutMembersInputSchema';
import { CardUncheckedCreateWithoutMembersInputSchema } from './CardUncheckedCreateWithoutMembersInputSchema';
import { CardCreateOrConnectWithoutMembersInputSchema } from './CardCreateOrConnectWithoutMembersInputSchema';
import { CardUpsertWithoutMembersInputSchema } from './CardUpsertWithoutMembersInputSchema';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardUpdateToOneWithWhereWithoutMembersInputSchema } from './CardUpdateToOneWithWhereWithoutMembersInputSchema';
import { CardUpdateWithoutMembersInputSchema } from './CardUpdateWithoutMembersInputSchema';
import { CardUncheckedUpdateWithoutMembersInputSchema } from './CardUncheckedUpdateWithoutMembersInputSchema';

export const CardUpdateOneRequiredWithoutMembersNestedInputSchema: z.ZodType<Prisma.CardUpdateOneRequiredWithoutMembersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCreateWithoutMembersInputSchema), z.lazy(() => CardUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CardCreateOrConnectWithoutMembersInputSchema).optional(),
  upsert: z.lazy(() => CardUpsertWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => CardWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CardUpdateToOneWithWhereWithoutMembersInputSchema), z.lazy(() => CardUpdateWithoutMembersInputSchema), z.lazy(() => CardUncheckedUpdateWithoutMembersInputSchema) ]).optional(),
});

export default CardUpdateOneRequiredWithoutMembersNestedInputSchema;
