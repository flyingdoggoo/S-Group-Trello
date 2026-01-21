import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberCreateWithoutUserInputSchema } from './CardMemberCreateWithoutUserInputSchema';
import { CardMemberUncheckedCreateWithoutUserInputSchema } from './CardMemberUncheckedCreateWithoutUserInputSchema';
import { CardMemberCreateOrConnectWithoutUserInputSchema } from './CardMemberCreateOrConnectWithoutUserInputSchema';
import { CardMemberUpsertWithWhereUniqueWithoutUserInputSchema } from './CardMemberUpsertWithWhereUniqueWithoutUserInputSchema';
import { CardMemberCreateManyUserInputEnvelopeSchema } from './CardMemberCreateManyUserInputEnvelopeSchema';
import { CardMemberWhereUniqueInputSchema } from './CardMemberWhereUniqueInputSchema';
import { CardMemberUpdateWithWhereUniqueWithoutUserInputSchema } from './CardMemberUpdateWithWhereUniqueWithoutUserInputSchema';
import { CardMemberUpdateManyWithWhereWithoutUserInputSchema } from './CardMemberUpdateManyWithWhereWithoutUserInputSchema';
import { CardMemberScalarWhereInputSchema } from './CardMemberScalarWhereInputSchema';

export const CardMemberUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CardMemberUncheckedUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardMemberCreateWithoutUserInputSchema), z.lazy(() => CardMemberCreateWithoutUserInputSchema).array(), z.lazy(() => CardMemberUncheckedCreateWithoutUserInputSchema), z.lazy(() => CardMemberUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardMemberCreateOrConnectWithoutUserInputSchema), z.lazy(() => CardMemberCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CardMemberUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => CardMemberUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardMemberCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CardMemberWhereUniqueInputSchema), z.lazy(() => CardMemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CardMemberWhereUniqueInputSchema), z.lazy(() => CardMemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CardMemberWhereUniqueInputSchema), z.lazy(() => CardMemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CardMemberWhereUniqueInputSchema), z.lazy(() => CardMemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CardMemberUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => CardMemberUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CardMemberUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => CardMemberUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CardMemberScalarWhereInputSchema), z.lazy(() => CardMemberScalarWhereInputSchema).array() ]).optional(),
});

export default CardMemberUncheckedUpdateManyWithoutUserNestedInputSchema;
