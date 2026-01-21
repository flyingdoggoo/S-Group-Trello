import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentCreateWithoutUserInputSchema } from './CardCommentCreateWithoutUserInputSchema';
import { CardCommentUncheckedCreateWithoutUserInputSchema } from './CardCommentUncheckedCreateWithoutUserInputSchema';
import { CardCommentCreateOrConnectWithoutUserInputSchema } from './CardCommentCreateOrConnectWithoutUserInputSchema';
import { CardCommentCreateManyUserInputEnvelopeSchema } from './CardCommentCreateManyUserInputEnvelopeSchema';
import { CardCommentWhereUniqueInputSchema } from './CardCommentWhereUniqueInputSchema';

export const CardCommentUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CardCommentUncheckedCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCommentCreateWithoutUserInputSchema), z.lazy(() => CardCommentCreateWithoutUserInputSchema).array(), z.lazy(() => CardCommentUncheckedCreateWithoutUserInputSchema), z.lazy(() => CardCommentUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardCommentCreateOrConnectWithoutUserInputSchema), z.lazy(() => CardCommentCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardCommentCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CardCommentWhereUniqueInputSchema), z.lazy(() => CardCommentWhereUniqueInputSchema).array() ]).optional(),
});

export default CardCommentUncheckedCreateNestedManyWithoutUserInputSchema;
