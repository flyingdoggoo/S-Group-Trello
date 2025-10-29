import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutSocialAccountsInputSchema } from './usersCreateWithoutSocialAccountsInputSchema';
import { usersUncheckedCreateWithoutSocialAccountsInputSchema } from './usersUncheckedCreateWithoutSocialAccountsInputSchema';
import { usersCreateOrConnectWithoutSocialAccountsInputSchema } from './usersCreateOrConnectWithoutSocialAccountsInputSchema';
import { usersUpsertWithoutSocialAccountsInputSchema } from './usersUpsertWithoutSocialAccountsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutSocialAccountsInputSchema } from './usersUpdateToOneWithWhereWithoutSocialAccountsInputSchema';
import { usersUpdateWithoutSocialAccountsInputSchema } from './usersUpdateWithoutSocialAccountsInputSchema';
import { usersUncheckedUpdateWithoutSocialAccountsInputSchema } from './usersUncheckedUpdateWithoutSocialAccountsInputSchema';

export const usersUpdateOneRequiredWithoutSocialAccountsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutSocialAccountsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutSocialAccountsInputSchema), z.lazy(() => usersUncheckedCreateWithoutSocialAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutSocialAccountsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutSocialAccountsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutSocialAccountsInputSchema), z.lazy(() => usersUpdateWithoutSocialAccountsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutSocialAccountsInputSchema) ]).optional(),
});

export default usersUpdateOneRequiredWithoutSocialAccountsNestedInputSchema;
