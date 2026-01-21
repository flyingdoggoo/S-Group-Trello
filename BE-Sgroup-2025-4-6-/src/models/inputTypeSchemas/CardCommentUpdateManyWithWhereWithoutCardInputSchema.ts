import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentScalarWhereInputSchema } from './CardCommentScalarWhereInputSchema';
import { CardCommentUpdateManyMutationInputSchema } from './CardCommentUpdateManyMutationInputSchema';
import { CardCommentUncheckedUpdateManyWithoutCardInputSchema } from './CardCommentUncheckedUpdateManyWithoutCardInputSchema';

export const CardCommentUpdateManyWithWhereWithoutCardInputSchema: z.ZodType<Prisma.CardCommentUpdateManyWithWhereWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardCommentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CardCommentUpdateManyMutationInputSchema), z.lazy(() => CardCommentUncheckedUpdateManyWithoutCardInputSchema) ]),
});

export default CardCommentUpdateManyWithWhereWithoutCardInputSchema;
