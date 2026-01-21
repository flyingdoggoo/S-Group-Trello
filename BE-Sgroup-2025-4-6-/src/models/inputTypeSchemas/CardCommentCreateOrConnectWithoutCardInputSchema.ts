import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentWhereUniqueInputSchema } from './CardCommentWhereUniqueInputSchema';
import { CardCommentCreateWithoutCardInputSchema } from './CardCommentCreateWithoutCardInputSchema';
import { CardCommentUncheckedCreateWithoutCardInputSchema } from './CardCommentUncheckedCreateWithoutCardInputSchema';

export const CardCommentCreateOrConnectWithoutCardInputSchema: z.ZodType<Prisma.CardCommentCreateOrConnectWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardCommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardCommentCreateWithoutCardInputSchema), z.lazy(() => CardCommentUncheckedCreateWithoutCardInputSchema) ]),
});

export default CardCommentCreateOrConnectWithoutCardInputSchema;
