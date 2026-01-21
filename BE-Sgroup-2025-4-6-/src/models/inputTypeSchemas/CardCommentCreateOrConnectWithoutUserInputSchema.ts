import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentWhereUniqueInputSchema } from './CardCommentWhereUniqueInputSchema';
import { CardCommentCreateWithoutUserInputSchema } from './CardCommentCreateWithoutUserInputSchema';
import { CardCommentUncheckedCreateWithoutUserInputSchema } from './CardCommentUncheckedCreateWithoutUserInputSchema';

export const CardCommentCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CardCommentCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => CardCommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardCommentCreateWithoutUserInputSchema), z.lazy(() => CardCommentUncheckedCreateWithoutUserInputSchema) ]),
});

export default CardCommentCreateOrConnectWithoutUserInputSchema;
