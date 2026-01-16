import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutCardCommentInputSchema } from './usersCreateWithoutCardCommentInputSchema';
import { usersUncheckedCreateWithoutCardCommentInputSchema } from './usersUncheckedCreateWithoutCardCommentInputSchema';

export const usersCreateOrConnectWithoutCardCommentInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutCardCommentInput> = z.strictObject({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutCardCommentInputSchema), z.lazy(() => usersUncheckedCreateWithoutCardCommentInputSchema) ]),
});

export default usersCreateOrConnectWithoutCardCommentInputSchema;
