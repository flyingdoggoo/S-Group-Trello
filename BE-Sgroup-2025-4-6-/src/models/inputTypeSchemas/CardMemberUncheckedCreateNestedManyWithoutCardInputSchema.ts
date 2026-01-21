import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberCreateWithoutCardInputSchema } from './CardMemberCreateWithoutCardInputSchema';
import { CardMemberUncheckedCreateWithoutCardInputSchema } from './CardMemberUncheckedCreateWithoutCardInputSchema';
import { CardMemberCreateOrConnectWithoutCardInputSchema } from './CardMemberCreateOrConnectWithoutCardInputSchema';
import { CardMemberCreateManyCardInputEnvelopeSchema } from './CardMemberCreateManyCardInputEnvelopeSchema';
import { CardMemberWhereUniqueInputSchema } from './CardMemberWhereUniqueInputSchema';

export const CardMemberUncheckedCreateNestedManyWithoutCardInputSchema: z.ZodType<Prisma.CardMemberUncheckedCreateNestedManyWithoutCardInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardMemberCreateWithoutCardInputSchema), z.lazy(() => CardMemberCreateWithoutCardInputSchema).array(), z.lazy(() => CardMemberUncheckedCreateWithoutCardInputSchema), z.lazy(() => CardMemberUncheckedCreateWithoutCardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardMemberCreateOrConnectWithoutCardInputSchema), z.lazy(() => CardMemberCreateOrConnectWithoutCardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardMemberCreateManyCardInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CardMemberWhereUniqueInputSchema), z.lazy(() => CardMemberWhereUniqueInputSchema).array() ]).optional(),
});

export default CardMemberUncheckedCreateNestedManyWithoutCardInputSchema;
