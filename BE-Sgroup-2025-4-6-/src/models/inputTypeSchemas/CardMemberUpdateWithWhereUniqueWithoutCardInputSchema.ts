import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberWhereUniqueInputSchema } from './CardMemberWhereUniqueInputSchema';
import { CardMemberUpdateWithoutCardInputSchema } from './CardMemberUpdateWithoutCardInputSchema';
import { CardMemberUncheckedUpdateWithoutCardInputSchema } from './CardMemberUncheckedUpdateWithoutCardInputSchema';

export const CardMemberUpdateWithWhereUniqueWithoutCardInputSchema: z.ZodType<Prisma.CardMemberUpdateWithWhereUniqueWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardMemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CardMemberUpdateWithoutCardInputSchema), z.lazy(() => CardMemberUncheckedUpdateWithoutCardInputSchema) ]),
});

export default CardMemberUpdateWithWhereUniqueWithoutCardInputSchema;
