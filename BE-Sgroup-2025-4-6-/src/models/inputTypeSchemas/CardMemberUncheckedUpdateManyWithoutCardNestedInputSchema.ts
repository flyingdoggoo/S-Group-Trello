import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberCreateWithoutCardInputSchema } from './CardMemberCreateWithoutCardInputSchema';
import { CardMemberUncheckedCreateWithoutCardInputSchema } from './CardMemberUncheckedCreateWithoutCardInputSchema';
import { CardMemberCreateOrConnectWithoutCardInputSchema } from './CardMemberCreateOrConnectWithoutCardInputSchema';
import { CardMemberUpsertWithWhereUniqueWithoutCardInputSchema } from './CardMemberUpsertWithWhereUniqueWithoutCardInputSchema';
import { CardMemberCreateManyCardInputEnvelopeSchema } from './CardMemberCreateManyCardInputEnvelopeSchema';
import { CardMemberWhereUniqueInputSchema } from './CardMemberWhereUniqueInputSchema';
import { CardMemberUpdateWithWhereUniqueWithoutCardInputSchema } from './CardMemberUpdateWithWhereUniqueWithoutCardInputSchema';
import { CardMemberUpdateManyWithWhereWithoutCardInputSchema } from './CardMemberUpdateManyWithWhereWithoutCardInputSchema';
import { CardMemberScalarWhereInputSchema } from './CardMemberScalarWhereInputSchema';

export const CardMemberUncheckedUpdateManyWithoutCardNestedInputSchema: z.ZodType<Prisma.CardMemberUncheckedUpdateManyWithoutCardNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardMemberCreateWithoutCardInputSchema), z.lazy(() => CardMemberCreateWithoutCardInputSchema).array(), z.lazy(() => CardMemberUncheckedCreateWithoutCardInputSchema), z.lazy(() => CardMemberUncheckedCreateWithoutCardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardMemberCreateOrConnectWithoutCardInputSchema), z.lazy(() => CardMemberCreateOrConnectWithoutCardInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CardMemberUpsertWithWhereUniqueWithoutCardInputSchema), z.lazy(() => CardMemberUpsertWithWhereUniqueWithoutCardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardMemberCreateManyCardInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CardMemberWhereUniqueInputSchema), z.lazy(() => CardMemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CardMemberWhereUniqueInputSchema), z.lazy(() => CardMemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CardMemberWhereUniqueInputSchema), z.lazy(() => CardMemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CardMemberWhereUniqueInputSchema), z.lazy(() => CardMemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CardMemberUpdateWithWhereUniqueWithoutCardInputSchema), z.lazy(() => CardMemberUpdateWithWhereUniqueWithoutCardInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CardMemberUpdateManyWithWhereWithoutCardInputSchema), z.lazy(() => CardMemberUpdateManyWithWhereWithoutCardInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CardMemberScalarWhereInputSchema), z.lazy(() => CardMemberScalarWhereInputSchema).array() ]).optional(),
});

export default CardMemberUncheckedUpdateManyWithoutCardNestedInputSchema;
