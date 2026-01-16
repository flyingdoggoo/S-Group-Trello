import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutCardMemberInputSchema } from './usersUpdateWithoutCardMemberInputSchema';
import { usersUncheckedUpdateWithoutCardMemberInputSchema } from './usersUncheckedUpdateWithoutCardMemberInputSchema';

export const usersUpdateToOneWithWhereWithoutCardMemberInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutCardMemberInput> = z.strictObject({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutCardMemberInputSchema), z.lazy(() => usersUncheckedUpdateWithoutCardMemberInputSchema) ]),
});

export default usersUpdateToOneWithWhereWithoutCardMemberInputSchema;
