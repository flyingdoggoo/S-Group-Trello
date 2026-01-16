import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutCardCommentInputSchema } from './usersUpdateWithoutCardCommentInputSchema';
import { usersUncheckedUpdateWithoutCardCommentInputSchema } from './usersUncheckedUpdateWithoutCardCommentInputSchema';

export const usersUpdateToOneWithWhereWithoutCardCommentInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutCardCommentInput> = z.strictObject({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutCardCommentInputSchema), z.lazy(() => usersUncheckedUpdateWithoutCardCommentInputSchema) ]),
});

export default usersUpdateToOneWithWhereWithoutCardCommentInputSchema;
