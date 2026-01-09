import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateWithoutInvitationInputSchema } from './BoardCreateWithoutInvitationInputSchema';
import { BoardUncheckedCreateWithoutInvitationInputSchema } from './BoardUncheckedCreateWithoutInvitationInputSchema';
import { BoardCreateOrConnectWithoutInvitationInputSchema } from './BoardCreateOrConnectWithoutInvitationInputSchema';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';

export const BoardCreateNestedOneWithoutInvitationInputSchema: z.ZodType<Prisma.BoardCreateNestedOneWithoutInvitationInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardCreateWithoutInvitationInputSchema), z.lazy(() => BoardUncheckedCreateWithoutInvitationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoardCreateOrConnectWithoutInvitationInputSchema).optional(),
  connect: z.lazy(() => BoardWhereUniqueInputSchema).optional(),
});

export default BoardCreateNestedOneWithoutInvitationInputSchema;
