import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutActionsInputSchema } from './usersCreateWithoutActionsInputSchema';
import { usersUncheckedCreateWithoutActionsInputSchema } from './usersUncheckedCreateWithoutActionsInputSchema';
import { usersCreateOrConnectWithoutActionsInputSchema } from './usersCreateOrConnectWithoutActionsInputSchema';
import { usersUpsertWithoutActionsInputSchema } from './usersUpsertWithoutActionsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutActionsInputSchema } from './usersUpdateToOneWithWhereWithoutActionsInputSchema';
import { usersUpdateWithoutActionsInputSchema } from './usersUpdateWithoutActionsInputSchema';
import { usersUncheckedUpdateWithoutActionsInputSchema } from './usersUncheckedUpdateWithoutActionsInputSchema';

export const usersUpdateOneWithoutActionsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutActionsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutActionsInputSchema), z.lazy(() => usersUncheckedCreateWithoutActionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutActionsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutActionsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => usersWhereInputSchema) ]).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutActionsInputSchema), z.lazy(() => usersUpdateWithoutActionsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutActionsInputSchema) ]).optional(),
});

export default usersUpdateOneWithoutActionsNestedInputSchema;
