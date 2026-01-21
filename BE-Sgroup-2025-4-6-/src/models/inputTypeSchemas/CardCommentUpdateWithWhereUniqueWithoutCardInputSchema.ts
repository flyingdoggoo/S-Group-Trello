import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentWhereUniqueInputSchema } from './CardCommentWhereUniqueInputSchema';
import { CardCommentUpdateWithoutCardInputSchema } from './CardCommentUpdateWithoutCardInputSchema';
import { CardCommentUncheckedUpdateWithoutCardInputSchema } from './CardCommentUncheckedUpdateWithoutCardInputSchema';

export const CardCommentUpdateWithWhereUniqueWithoutCardInputSchema: z.ZodType<Prisma.CardCommentUpdateWithWhereUniqueWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardCommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CardCommentUpdateWithoutCardInputSchema), z.lazy(() => CardCommentUncheckedUpdateWithoutCardInputSchema) ]),
});

export default CardCommentUpdateWithWhereUniqueWithoutCardInputSchema;
