import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberWhereUniqueInputSchema } from './CardMemberWhereUniqueInputSchema';
import { CardMemberUpdateWithoutUserInputSchema } from './CardMemberUpdateWithoutUserInputSchema';
import { CardMemberUncheckedUpdateWithoutUserInputSchema } from './CardMemberUncheckedUpdateWithoutUserInputSchema';

export const CardMemberUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CardMemberUpdateWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => CardMemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CardMemberUpdateWithoutUserInputSchema), z.lazy(() => CardMemberUncheckedUpdateWithoutUserInputSchema) ]),
});

export default CardMemberUpdateWithWhereUniqueWithoutUserInputSchema;
