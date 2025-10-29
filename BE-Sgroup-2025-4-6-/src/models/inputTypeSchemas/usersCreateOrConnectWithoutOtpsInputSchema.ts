import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutOtpsInputSchema } from './usersCreateWithoutOtpsInputSchema';
import { usersUncheckedCreateWithoutOtpsInputSchema } from './usersUncheckedCreateWithoutOtpsInputSchema';

export const usersCreateOrConnectWithoutOtpsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutOtpsInput> = z.strictObject({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutOtpsInputSchema), z.lazy(() => usersUncheckedCreateWithoutOtpsInputSchema) ]),
});

export default usersCreateOrConnectWithoutOtpsInputSchema;
