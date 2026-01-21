import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberWhereUniqueInputSchema } from './CardMemberWhereUniqueInputSchema';
import { CardMemberUpdateWithoutUserInputSchema } from './CardMemberUpdateWithoutUserInputSchema';
import { CardMemberUncheckedUpdateWithoutUserInputSchema } from './CardMemberUncheckedUpdateWithoutUserInputSchema';
import { CardMemberCreateWithoutUserInputSchema } from './CardMemberCreateWithoutUserInputSchema';
import { CardMemberUncheckedCreateWithoutUserInputSchema } from './CardMemberUncheckedCreateWithoutUserInputSchema';

export const CardMemberUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CardMemberUpsertWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => CardMemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CardMemberUpdateWithoutUserInputSchema), z.lazy(() => CardMemberUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => CardMemberCreateWithoutUserInputSchema), z.lazy(() => CardMemberUncheckedCreateWithoutUserInputSchema) ]),
});

export default CardMemberUpsertWithWhereUniqueWithoutUserInputSchema;
