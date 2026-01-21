import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentScalarWhereInputSchema } from './CardCommentScalarWhereInputSchema';
import { CardCommentUpdateManyMutationInputSchema } from './CardCommentUpdateManyMutationInputSchema';
import { CardCommentUncheckedUpdateManyWithoutUserInputSchema } from './CardCommentUncheckedUpdateManyWithoutUserInputSchema';

export const CardCommentUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CardCommentUpdateManyWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => CardCommentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CardCommentUpdateManyMutationInputSchema), z.lazy(() => CardCommentUncheckedUpdateManyWithoutUserInputSchema) ]),
});

export default CardCommentUpdateManyWithWhereWithoutUserInputSchema;
