import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutOtpsInputSchema } from './usersUpdateWithoutOtpsInputSchema';
import { usersUncheckedUpdateWithoutOtpsInputSchema } from './usersUncheckedUpdateWithoutOtpsInputSchema';
import { usersCreateWithoutOtpsInputSchema } from './usersCreateWithoutOtpsInputSchema';
import { usersUncheckedCreateWithoutOtpsInputSchema } from './usersUncheckedCreateWithoutOtpsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutOtpsInputSchema: z.ZodType<Prisma.usersUpsertWithoutOtpsInput> = z.strictObject({
  update: z.union([ z.lazy(() => usersUpdateWithoutOtpsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutOtpsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutOtpsInputSchema), z.lazy(() => usersUncheckedCreateWithoutOtpsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional(),
});

export default usersUpsertWithoutOtpsInputSchema;
