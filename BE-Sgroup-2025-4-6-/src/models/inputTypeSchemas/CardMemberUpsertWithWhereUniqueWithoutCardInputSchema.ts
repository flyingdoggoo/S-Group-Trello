import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberWhereUniqueInputSchema } from './CardMemberWhereUniqueInputSchema';
import { CardMemberUpdateWithoutCardInputSchema } from './CardMemberUpdateWithoutCardInputSchema';
import { CardMemberUncheckedUpdateWithoutCardInputSchema } from './CardMemberUncheckedUpdateWithoutCardInputSchema';
import { CardMemberCreateWithoutCardInputSchema } from './CardMemberCreateWithoutCardInputSchema';
import { CardMemberUncheckedCreateWithoutCardInputSchema } from './CardMemberUncheckedCreateWithoutCardInputSchema';

export const CardMemberUpsertWithWhereUniqueWithoutCardInputSchema: z.ZodType<Prisma.CardMemberUpsertWithWhereUniqueWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardMemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CardMemberUpdateWithoutCardInputSchema), z.lazy(() => CardMemberUncheckedUpdateWithoutCardInputSchema) ]),
  create: z.union([ z.lazy(() => CardMemberCreateWithoutCardInputSchema), z.lazy(() => CardMemberUncheckedCreateWithoutCardInputSchema) ]),
});

export default CardMemberUpsertWithWhereUniqueWithoutCardInputSchema;
