import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutOtpsInputSchema } from './usersCreateWithoutOtpsInputSchema';
import { usersUncheckedCreateWithoutOtpsInputSchema } from './usersUncheckedCreateWithoutOtpsInputSchema';
import { usersCreateOrConnectWithoutOtpsInputSchema } from './usersCreateOrConnectWithoutOtpsInputSchema';
import { usersUpsertWithoutOtpsInputSchema } from './usersUpsertWithoutOtpsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutOtpsInputSchema } from './usersUpdateToOneWithWhereWithoutOtpsInputSchema';
import { usersUpdateWithoutOtpsInputSchema } from './usersUpdateWithoutOtpsInputSchema';
import { usersUncheckedUpdateWithoutOtpsInputSchema } from './usersUncheckedUpdateWithoutOtpsInputSchema';

export const usersUpdateOneRequiredWithoutOtpsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutOtpsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutOtpsInputSchema), z.lazy(() => usersUncheckedCreateWithoutOtpsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutOtpsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutOtpsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutOtpsInputSchema), z.lazy(() => usersUpdateWithoutOtpsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutOtpsInputSchema) ]).optional(),
});

export default usersUpdateOneRequiredWithoutOtpsNestedInputSchema;
