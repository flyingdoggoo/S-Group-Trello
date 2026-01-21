import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';
import { BoardUpdateWithoutInvitationInputSchema } from './BoardUpdateWithoutInvitationInputSchema';
import { BoardUncheckedUpdateWithoutInvitationInputSchema } from './BoardUncheckedUpdateWithoutInvitationInputSchema';

export const BoardUpdateToOneWithWhereWithoutInvitationInputSchema: z.ZodType<Prisma.BoardUpdateToOneWithWhereWithoutInvitationInput> = z.strictObject({
  where: z.lazy(() => BoardWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BoardUpdateWithoutInvitationInputSchema), z.lazy(() => BoardUncheckedUpdateWithoutInvitationInputSchema) ]),
});

export default BoardUpdateToOneWithWhereWithoutInvitationInputSchema;
