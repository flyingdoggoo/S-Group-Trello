import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutCardMemberInputSchema } from './usersCreateWithoutCardMemberInputSchema';
import { usersUncheckedCreateWithoutCardMemberInputSchema } from './usersUncheckedCreateWithoutCardMemberInputSchema';
import { usersCreateOrConnectWithoutCardMemberInputSchema } from './usersCreateOrConnectWithoutCardMemberInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutCardMemberInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutCardMemberInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutCardMemberInputSchema), z.lazy(() => usersUncheckedCreateWithoutCardMemberInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutCardMemberInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
});

export default usersCreateNestedOneWithoutCardMemberInputSchema;
