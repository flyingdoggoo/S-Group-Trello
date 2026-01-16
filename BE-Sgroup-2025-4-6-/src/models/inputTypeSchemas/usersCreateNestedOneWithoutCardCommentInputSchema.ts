import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutCardCommentInputSchema } from './usersCreateWithoutCardCommentInputSchema';
import { usersUncheckedCreateWithoutCardCommentInputSchema } from './usersUncheckedCreateWithoutCardCommentInputSchema';
import { usersCreateOrConnectWithoutCardCommentInputSchema } from './usersCreateOrConnectWithoutCardCommentInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutCardCommentInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutCardCommentInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutCardCommentInputSchema), z.lazy(() => usersUncheckedCreateWithoutCardCommentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutCardCommentInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
});

export default usersCreateNestedOneWithoutCardCommentInputSchema;
