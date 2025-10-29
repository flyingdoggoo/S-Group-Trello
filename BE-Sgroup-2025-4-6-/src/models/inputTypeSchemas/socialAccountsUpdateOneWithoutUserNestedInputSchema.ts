import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { socialAccountsCreateWithoutUserInputSchema } from './socialAccountsCreateWithoutUserInputSchema';
import { socialAccountsUncheckedCreateWithoutUserInputSchema } from './socialAccountsUncheckedCreateWithoutUserInputSchema';
import { socialAccountsCreateOrConnectWithoutUserInputSchema } from './socialAccountsCreateOrConnectWithoutUserInputSchema';
import { socialAccountsUpsertWithoutUserInputSchema } from './socialAccountsUpsertWithoutUserInputSchema';
import { socialAccountsWhereInputSchema } from './socialAccountsWhereInputSchema';
import { socialAccountsWhereUniqueInputSchema } from './socialAccountsWhereUniqueInputSchema';
import { socialAccountsUpdateToOneWithWhereWithoutUserInputSchema } from './socialAccountsUpdateToOneWithWhereWithoutUserInputSchema';
import { socialAccountsUpdateWithoutUserInputSchema } from './socialAccountsUpdateWithoutUserInputSchema';
import { socialAccountsUncheckedUpdateWithoutUserInputSchema } from './socialAccountsUncheckedUpdateWithoutUserInputSchema';

export const socialAccountsUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.socialAccountsUpdateOneWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => socialAccountsCreateWithoutUserInputSchema), z.lazy(() => socialAccountsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => socialAccountsCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => socialAccountsUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => socialAccountsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => socialAccountsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => socialAccountsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => socialAccountsUpdateToOneWithWhereWithoutUserInputSchema), z.lazy(() => socialAccountsUpdateWithoutUserInputSchema), z.lazy(() => socialAccountsUncheckedUpdateWithoutUserInputSchema) ]).optional(),
});

export default socialAccountsUpdateOneWithoutUserNestedInputSchema;
