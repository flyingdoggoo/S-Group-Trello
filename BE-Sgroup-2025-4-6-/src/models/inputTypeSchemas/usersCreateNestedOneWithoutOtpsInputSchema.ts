import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutOtpsInputSchema } from './usersCreateWithoutOtpsInputSchema';
import { usersUncheckedCreateWithoutOtpsInputSchema } from './usersUncheckedCreateWithoutOtpsInputSchema';
import { usersCreateOrConnectWithoutOtpsInputSchema } from './usersCreateOrConnectWithoutOtpsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutOtpsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutOtpsInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutOtpsInputSchema), z.lazy(() => usersUncheckedCreateWithoutOtpsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutOtpsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
});

export default usersCreateNestedOneWithoutOtpsInputSchema;
