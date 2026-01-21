import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentWhereUniqueInputSchema } from './CardCommentWhereUniqueInputSchema';
import { CardCommentUpdateWithoutCardInputSchema } from './CardCommentUpdateWithoutCardInputSchema';
import { CardCommentUncheckedUpdateWithoutCardInputSchema } from './CardCommentUncheckedUpdateWithoutCardInputSchema';
import { CardCommentCreateWithoutCardInputSchema } from './CardCommentCreateWithoutCardInputSchema';
import { CardCommentUncheckedCreateWithoutCardInputSchema } from './CardCommentUncheckedCreateWithoutCardInputSchema';

export const CardCommentUpsertWithWhereUniqueWithoutCardInputSchema: z.ZodType<Prisma.CardCommentUpsertWithWhereUniqueWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardCommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CardCommentUpdateWithoutCardInputSchema), z.lazy(() => CardCommentUncheckedUpdateWithoutCardInputSchema) ]),
  create: z.union([ z.lazy(() => CardCommentCreateWithoutCardInputSchema), z.lazy(() => CardCommentUncheckedCreateWithoutCardInputSchema) ]),
});

export default CardCommentUpsertWithWhereUniqueWithoutCardInputSchema;
