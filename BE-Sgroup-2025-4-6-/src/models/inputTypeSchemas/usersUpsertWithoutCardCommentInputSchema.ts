import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutCardCommentInputSchema } from './usersUpdateWithoutCardCommentInputSchema';
import { usersUncheckedUpdateWithoutCardCommentInputSchema } from './usersUncheckedUpdateWithoutCardCommentInputSchema';
import { usersCreateWithoutCardCommentInputSchema } from './usersCreateWithoutCardCommentInputSchema';
import { usersUncheckedCreateWithoutCardCommentInputSchema } from './usersUncheckedCreateWithoutCardCommentInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutCardCommentInputSchema: z.ZodType<Prisma.usersUpsertWithoutCardCommentInput> = z.strictObject({
  update: z.union([ z.lazy(() => usersUpdateWithoutCardCommentInputSchema), z.lazy(() => usersUncheckedUpdateWithoutCardCommentInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutCardCommentInputSchema), z.lazy(() => usersUncheckedCreateWithoutCardCommentInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional(),
});

export default usersUpsertWithoutCardCommentInputSchema;
