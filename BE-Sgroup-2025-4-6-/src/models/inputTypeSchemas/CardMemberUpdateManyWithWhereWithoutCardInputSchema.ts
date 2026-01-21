import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberScalarWhereInputSchema } from './CardMemberScalarWhereInputSchema';
import { CardMemberUpdateManyMutationInputSchema } from './CardMemberUpdateManyMutationInputSchema';
import { CardMemberUncheckedUpdateManyWithoutCardInputSchema } from './CardMemberUncheckedUpdateManyWithoutCardInputSchema';

export const CardMemberUpdateManyWithWhereWithoutCardInputSchema: z.ZodType<Prisma.CardMemberUpdateManyWithWhereWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardMemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CardMemberUpdateManyMutationInputSchema), z.lazy(() => CardMemberUncheckedUpdateManyWithoutCardInputSchema) ]),
});

export default CardMemberUpdateManyWithWhereWithoutCardInputSchema;
