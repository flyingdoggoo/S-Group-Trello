import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentCreateWithoutUserInputSchema } from './CardCommentCreateWithoutUserInputSchema';
import { CardCommentUncheckedCreateWithoutUserInputSchema } from './CardCommentUncheckedCreateWithoutUserInputSchema';
import { CardCommentCreateOrConnectWithoutUserInputSchema } from './CardCommentCreateOrConnectWithoutUserInputSchema';
import { CardCommentUpsertWithWhereUniqueWithoutUserInputSchema } from './CardCommentUpsertWithWhereUniqueWithoutUserInputSchema';
import { CardCommentCreateManyUserInputEnvelopeSchema } from './CardCommentCreateManyUserInputEnvelopeSchema';
import { CardCommentWhereUniqueInputSchema } from './CardCommentWhereUniqueInputSchema';
import { CardCommentUpdateWithWhereUniqueWithoutUserInputSchema } from './CardCommentUpdateWithWhereUniqueWithoutUserInputSchema';
import { CardCommentUpdateManyWithWhereWithoutUserInputSchema } from './CardCommentUpdateManyWithWhereWithoutUserInputSchema';
import { CardCommentScalarWhereInputSchema } from './CardCommentScalarWhereInputSchema';

export const CardCommentUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CardCommentUncheckedUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCommentCreateWithoutUserInputSchema), z.lazy(() => CardCommentCreateWithoutUserInputSchema).array(), z.lazy(() => CardCommentUncheckedCreateWithoutUserInputSchema), z.lazy(() => CardCommentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardCommentCreateOrConnectWithoutUserInputSchema), z.lazy(() => CardCommentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CardCommentUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => CardCommentUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardCommentCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CardCommentWhereUniqueInputSchema), z.lazy(() => CardCommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CardCommentWhereUniqueInputSchema), z.lazy(() => CardCommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CardCommentWhereUniqueInputSchema), z.lazy(() => CardCommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CardCommentWhereUniqueInputSchema), z.lazy(() => CardCommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CardCommentUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => CardCommentUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CardCommentUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => CardCommentUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CardCommentScalarWhereInputSchema), z.lazy(() => CardCommentScalarWhereInputSchema).array() ]).optional(),
});

export default CardCommentUncheckedUpdateManyWithoutUserNestedInputSchema;
