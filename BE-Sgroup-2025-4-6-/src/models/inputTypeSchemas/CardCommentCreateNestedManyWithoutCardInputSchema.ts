import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentCreateWithoutCardInputSchema } from './CardCommentCreateWithoutCardInputSchema';
import { CardCommentUncheckedCreateWithoutCardInputSchema } from './CardCommentUncheckedCreateWithoutCardInputSchema';
import { CardCommentCreateOrConnectWithoutCardInputSchema } from './CardCommentCreateOrConnectWithoutCardInputSchema';
import { CardCommentCreateManyCardInputEnvelopeSchema } from './CardCommentCreateManyCardInputEnvelopeSchema';
import { CardCommentWhereUniqueInputSchema } from './CardCommentWhereUniqueInputSchema';

export const CardCommentCreateNestedManyWithoutCardInputSchema: z.ZodType<Prisma.CardCommentCreateNestedManyWithoutCardInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCommentCreateWithoutCardInputSchema), z.lazy(() => CardCommentCreateWithoutCardInputSchema).array(), z.lazy(() => CardCommentUncheckedCreateWithoutCardInputSchema), z.lazy(() => CardCommentUncheckedCreateWithoutCardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardCommentCreateOrConnectWithoutCardInputSchema), z.lazy(() => CardCommentCreateOrConnectWithoutCardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardCommentCreateManyCardInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CardCommentWhereUniqueInputSchema), z.lazy(() => CardCommentWhereUniqueInputSchema).array() ]).optional(),
});

export default CardCommentCreateNestedManyWithoutCardInputSchema;
