import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutCardMemberInputSchema } from './usersCreateWithoutCardMemberInputSchema';
import { usersUncheckedCreateWithoutCardMemberInputSchema } from './usersUncheckedCreateWithoutCardMemberInputSchema';
import { usersCreateOrConnectWithoutCardMemberInputSchema } from './usersCreateOrConnectWithoutCardMemberInputSchema';
import { usersUpsertWithoutCardMemberInputSchema } from './usersUpsertWithoutCardMemberInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutCardMemberInputSchema } from './usersUpdateToOneWithWhereWithoutCardMemberInputSchema';
import { usersUpdateWithoutCardMemberInputSchema } from './usersUpdateWithoutCardMemberInputSchema';
import { usersUncheckedUpdateWithoutCardMemberInputSchema } from './usersUncheckedUpdateWithoutCardMemberInputSchema';

export const usersUpdateOneRequiredWithoutCardMemberNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutCardMemberNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutCardMemberInputSchema), z.lazy(() => usersUncheckedCreateWithoutCardMemberInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutCardMemberInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutCardMemberInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutCardMemberInputSchema), z.lazy(() => usersUpdateWithoutCardMemberInputSchema), z.lazy(() => usersUncheckedUpdateWithoutCardMemberInputSchema) ]).optional(),
});

export default usersUpdateOneRequiredWithoutCardMemberNestedInputSchema;
