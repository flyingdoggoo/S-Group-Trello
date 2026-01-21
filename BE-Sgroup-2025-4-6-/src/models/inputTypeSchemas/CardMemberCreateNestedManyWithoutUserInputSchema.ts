import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberCreateWithoutUserInputSchema } from './CardMemberCreateWithoutUserInputSchema';
import { CardMemberUncheckedCreateWithoutUserInputSchema } from './CardMemberUncheckedCreateWithoutUserInputSchema';
import { CardMemberCreateOrConnectWithoutUserInputSchema } from './CardMemberCreateOrConnectWithoutUserInputSchema';
import { CardMemberCreateManyUserInputEnvelopeSchema } from './CardMemberCreateManyUserInputEnvelopeSchema';
import { CardMemberWhereUniqueInputSchema } from './CardMemberWhereUniqueInputSchema';

export const CardMemberCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CardMemberCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardMemberCreateWithoutUserInputSchema), z.lazy(() => CardMemberCreateWithoutUserInputSchema).array(), z.lazy(() => CardMemberUncheckedCreateWithoutUserInputSchema), z.lazy(() => CardMemberUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardMemberCreateOrConnectWithoutUserInputSchema), z.lazy(() => CardMemberCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardMemberCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CardMemberWhereUniqueInputSchema), z.lazy(() => CardMemberWhereUniqueInputSchema).array() ]).optional(),
});

export default CardMemberCreateNestedManyWithoutUserInputSchema;
