import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentWhereUniqueInputSchema } from './CardCommentWhereUniqueInputSchema';
import { CardCommentUpdateWithoutUserInputSchema } from './CardCommentUpdateWithoutUserInputSchema';
import { CardCommentUncheckedUpdateWithoutUserInputSchema } from './CardCommentUncheckedUpdateWithoutUserInputSchema';

export const CardCommentUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CardCommentUpdateWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => CardCommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CardCommentUpdateWithoutUserInputSchema), z.lazy(() => CardCommentUncheckedUpdateWithoutUserInputSchema) ]),
});

export default CardCommentUpdateWithWhereUniqueWithoutUserInputSchema;
