import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';
import { BoardCreateWithoutInvitationInputSchema } from './BoardCreateWithoutInvitationInputSchema';
import { BoardUncheckedCreateWithoutInvitationInputSchema } from './BoardUncheckedCreateWithoutInvitationInputSchema';

export const BoardCreateOrConnectWithoutInvitationInputSchema: z.ZodType<Prisma.BoardCreateOrConnectWithoutInvitationInput> = z.strictObject({
  where: z.lazy(() => BoardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoardCreateWithoutInvitationInputSchema), z.lazy(() => BoardUncheckedCreateWithoutInvitationInputSchema) ]),
});

export default BoardCreateOrConnectWithoutInvitationInputSchema;
