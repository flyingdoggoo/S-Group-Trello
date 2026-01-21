import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberScalarWhereInputSchema } from './CardMemberScalarWhereInputSchema';
import { CardMemberUpdateManyMutationInputSchema } from './CardMemberUpdateManyMutationInputSchema';
import { CardMemberUncheckedUpdateManyWithoutUserInputSchema } from './CardMemberUncheckedUpdateManyWithoutUserInputSchema';

export const CardMemberUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CardMemberUpdateManyWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => CardMemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CardMemberUpdateManyMutationInputSchema), z.lazy(() => CardMemberUncheckedUpdateManyWithoutUserInputSchema) ]),
});

export default CardMemberUpdateManyWithWhereWithoutUserInputSchema;
