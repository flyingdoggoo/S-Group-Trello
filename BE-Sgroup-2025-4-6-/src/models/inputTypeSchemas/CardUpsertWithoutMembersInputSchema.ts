import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardUpdateWithoutMembersInputSchema } from './CardUpdateWithoutMembersInputSchema';
import { CardUncheckedUpdateWithoutMembersInputSchema } from './CardUncheckedUpdateWithoutMembersInputSchema';
import { CardCreateWithoutMembersInputSchema } from './CardCreateWithoutMembersInputSchema';
import { CardUncheckedCreateWithoutMembersInputSchema } from './CardUncheckedCreateWithoutMembersInputSchema';
import { CardWhereInputSchema } from './CardWhereInputSchema';

export const CardUpsertWithoutMembersInputSchema: z.ZodType<Prisma.CardUpsertWithoutMembersInput> = z.strictObject({
  update: z.union([ z.lazy(() => CardUpdateWithoutMembersInputSchema), z.lazy(() => CardUncheckedUpdateWithoutMembersInputSchema) ]),
  create: z.union([ z.lazy(() => CardCreateWithoutMembersInputSchema), z.lazy(() => CardUncheckedCreateWithoutMembersInputSchema) ]),
  where: z.lazy(() => CardWhereInputSchema).optional(),
});

export default CardUpsertWithoutMembersInputSchema;
