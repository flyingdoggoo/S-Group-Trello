import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereInputSchema } from './CardWhereInputSchema';
import { CardUpdateWithoutMembersInputSchema } from './CardUpdateWithoutMembersInputSchema';
import { CardUncheckedUpdateWithoutMembersInputSchema } from './CardUncheckedUpdateWithoutMembersInputSchema';

export const CardUpdateToOneWithWhereWithoutMembersInputSchema: z.ZodType<Prisma.CardUpdateToOneWithWhereWithoutMembersInput> = z.strictObject({
  where: z.lazy(() => CardWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CardUpdateWithoutMembersInputSchema), z.lazy(() => CardUncheckedUpdateWithoutMembersInputSchema) ]),
});

export default CardUpdateToOneWithWhereWithoutMembersInputSchema;
