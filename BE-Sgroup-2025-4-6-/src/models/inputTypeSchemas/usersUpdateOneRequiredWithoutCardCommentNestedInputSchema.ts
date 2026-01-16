import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutCardCommentInputSchema } from './usersCreateWithoutCardCommentInputSchema';
import { usersUncheckedCreateWithoutCardCommentInputSchema } from './usersUncheckedCreateWithoutCardCommentInputSchema';
import { usersCreateOrConnectWithoutCardCommentInputSchema } from './usersCreateOrConnectWithoutCardCommentInputSchema';
import { usersUpsertWithoutCardCommentInputSchema } from './usersUpsertWithoutCardCommentInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutCardCommentInputSchema } from './usersUpdateToOneWithWhereWithoutCardCommentInputSchema';
import { usersUpdateWithoutCardCommentInputSchema } from './usersUpdateWithoutCardCommentInputSchema';
import { usersUncheckedUpdateWithoutCardCommentInputSchema } from './usersUncheckedUpdateWithoutCardCommentInputSchema';

export const usersUpdateOneRequiredWithoutCardCommentNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutCardCommentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutCardCommentInputSchema), z.lazy(() => usersUncheckedCreateWithoutCardCommentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutCardCommentInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutCardCommentInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutCardCommentInputSchema), z.lazy(() => usersUpdateWithoutCardCommentInputSchema), z.lazy(() => usersUncheckedUpdateWithoutCardCommentInputSchema) ]).optional(),
});

export default usersUpdateOneRequiredWithoutCardCommentNestedInputSchema;
