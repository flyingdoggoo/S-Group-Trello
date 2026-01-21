import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentWhereUniqueInputSchema } from './CardCommentWhereUniqueInputSchema';
import { CardCommentUpdateWithoutUserInputSchema } from './CardCommentUpdateWithoutUserInputSchema';
import { CardCommentUncheckedUpdateWithoutUserInputSchema } from './CardCommentUncheckedUpdateWithoutUserInputSchema';
import { CardCommentCreateWithoutUserInputSchema } from './CardCommentCreateWithoutUserInputSchema';
import { CardCommentUncheckedCreateWithoutUserInputSchema } from './CardCommentUncheckedCreateWithoutUserInputSchema';

export const CardCommentUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CardCommentUpsertWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => CardCommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CardCommentUpdateWithoutUserInputSchema), z.lazy(() => CardCommentUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => CardCommentCreateWithoutUserInputSchema), z.lazy(() => CardCommentUncheckedCreateWithoutUserInputSchema) ]),
});

export default CardCommentUpsertWithWhereUniqueWithoutUserInputSchema;
