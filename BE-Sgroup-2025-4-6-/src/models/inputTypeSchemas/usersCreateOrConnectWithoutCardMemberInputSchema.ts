import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutCardMemberInputSchema } from './usersCreateWithoutCardMemberInputSchema';
import { usersUncheckedCreateWithoutCardMemberInputSchema } from './usersUncheckedCreateWithoutCardMemberInputSchema';

export const usersCreateOrConnectWithoutCardMemberInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutCardMemberInput> = z.strictObject({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutCardMemberInputSchema), z.lazy(() => usersUncheckedCreateWithoutCardMemberInputSchema) ]),
});

export default usersCreateOrConnectWithoutCardMemberInputSchema;
