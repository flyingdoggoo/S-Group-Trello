import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutCardMemberInputSchema } from './usersUpdateWithoutCardMemberInputSchema';
import { usersUncheckedUpdateWithoutCardMemberInputSchema } from './usersUncheckedUpdateWithoutCardMemberInputSchema';
import { usersCreateWithoutCardMemberInputSchema } from './usersCreateWithoutCardMemberInputSchema';
import { usersUncheckedCreateWithoutCardMemberInputSchema } from './usersUncheckedCreateWithoutCardMemberInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutCardMemberInputSchema: z.ZodType<Prisma.usersUpsertWithoutCardMemberInput> = z.strictObject({
  update: z.union([ z.lazy(() => usersUpdateWithoutCardMemberInputSchema), z.lazy(() => usersUncheckedUpdateWithoutCardMemberInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutCardMemberInputSchema), z.lazy(() => usersUncheckedCreateWithoutCardMemberInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional(),
});

export default usersUpsertWithoutCardMemberInputSchema;
