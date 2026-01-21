import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardUpdateWithoutInvitationInputSchema } from './BoardUpdateWithoutInvitationInputSchema';
import { BoardUncheckedUpdateWithoutInvitationInputSchema } from './BoardUncheckedUpdateWithoutInvitationInputSchema';
import { BoardCreateWithoutInvitationInputSchema } from './BoardCreateWithoutInvitationInputSchema';
import { BoardUncheckedCreateWithoutInvitationInputSchema } from './BoardUncheckedCreateWithoutInvitationInputSchema';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';

export const BoardUpsertWithoutInvitationInputSchema: z.ZodType<Prisma.BoardUpsertWithoutInvitationInput> = z.strictObject({
  update: z.union([ z.lazy(() => BoardUpdateWithoutInvitationInputSchema), z.lazy(() => BoardUncheckedUpdateWithoutInvitationInputSchema) ]),
  create: z.union([ z.lazy(() => BoardCreateWithoutInvitationInputSchema), z.lazy(() => BoardUncheckedCreateWithoutInvitationInputSchema) ]),
  where: z.lazy(() => BoardWhereInputSchema).optional(),
});

export default BoardUpsertWithoutInvitationInputSchema;
