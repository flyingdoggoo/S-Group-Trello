import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentCreateWithoutCardInputSchema } from './CardCommentCreateWithoutCardInputSchema';
import { CardCommentUncheckedCreateWithoutCardInputSchema } from './CardCommentUncheckedCreateWithoutCardInputSchema';
import { CardCommentCreateOrConnectWithoutCardInputSchema } from './CardCommentCreateOrConnectWithoutCardInputSchema';
import { CardCommentUpsertWithWhereUniqueWithoutCardInputSchema } from './CardCommentUpsertWithWhereUniqueWithoutCardInputSchema';
import { CardCommentCreateManyCardInputEnvelopeSchema } from './CardCommentCreateManyCardInputEnvelopeSchema';
import { CardCommentWhereUniqueInputSchema } from './CardCommentWhereUniqueInputSchema';
import { CardCommentUpdateWithWhereUniqueWithoutCardInputSchema } from './CardCommentUpdateWithWhereUniqueWithoutCardInputSchema';
import { CardCommentUpdateManyWithWhereWithoutCardInputSchema } from './CardCommentUpdateManyWithWhereWithoutCardInputSchema';
import { CardCommentScalarWhereInputSchema } from './CardCommentScalarWhereInputSchema';

export const CardCommentUpdateManyWithoutCardNestedInputSchema: z.ZodType<Prisma.CardCommentUpdateManyWithoutCardNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCommentCreateWithoutCardInputSchema), z.lazy(() => CardCommentCreateWithoutCardInputSchema).array(), z.lazy(() => CardCommentUncheckedCreateWithoutCardInputSchema), z.lazy(() => CardCommentUncheckedCreateWithoutCardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardCommentCreateOrConnectWithoutCardInputSchema), z.lazy(() => CardCommentCreateOrConnectWithoutCardInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CardCommentUpsertWithWhereUniqueWithoutCardInputSchema), z.lazy(() => CardCommentUpsertWithWhereUniqueWithoutCardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardCommentCreateManyCardInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CardCommentWhereUniqueInputSchema), z.lazy(() => CardCommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CardCommentWhereUniqueInputSchema), z.lazy(() => CardCommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CardCommentWhereUniqueInputSchema), z.lazy(() => CardCommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CardCommentWhereUniqueInputSchema), z.lazy(() => CardCommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CardCommentUpdateWithWhereUniqueWithoutCardInputSchema), z.lazy(() => CardCommentUpdateWithWhereUniqueWithoutCardInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CardCommentUpdateManyWithWhereWithoutCardInputSchema), z.lazy(() => CardCommentUpdateManyWithWhereWithoutCardInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CardCommentScalarWhereInputSchema), z.lazy(() => CardCommentScalarWhereInputSchema).array() ]).optional(),
});

export default CardCommentUpdateManyWithoutCardNestedInputSchema;
