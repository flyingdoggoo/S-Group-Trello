import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateWithoutInvitationInputSchema } from './BoardCreateWithoutInvitationInputSchema';
import { BoardUncheckedCreateWithoutInvitationInputSchema } from './BoardUncheckedCreateWithoutInvitationInputSchema';
import { BoardCreateOrConnectWithoutInvitationInputSchema } from './BoardCreateOrConnectWithoutInvitationInputSchema';
import { BoardUpsertWithoutInvitationInputSchema } from './BoardUpsertWithoutInvitationInputSchema';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';
import { BoardUpdateToOneWithWhereWithoutInvitationInputSchema } from './BoardUpdateToOneWithWhereWithoutInvitationInputSchema';
import { BoardUpdateWithoutInvitationInputSchema } from './BoardUpdateWithoutInvitationInputSchema';
import { BoardUncheckedUpdateWithoutInvitationInputSchema } from './BoardUncheckedUpdateWithoutInvitationInputSchema';

export const BoardUpdateOneWithoutInvitationNestedInputSchema: z.ZodType<Prisma.BoardUpdateOneWithoutInvitationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardCreateWithoutInvitationInputSchema), z.lazy(() => BoardUncheckedCreateWithoutInvitationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoardCreateOrConnectWithoutInvitationInputSchema).optional(),
  upsert: z.lazy(() => BoardUpsertWithoutInvitationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BoardWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BoardWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BoardWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BoardUpdateToOneWithWhereWithoutInvitationInputSchema), z.lazy(() => BoardUpdateWithoutInvitationInputSchema), z.lazy(() => BoardUncheckedUpdateWithoutInvitationInputSchema) ]).optional(),
});

export default BoardUpdateOneWithoutInvitationNestedInputSchema;
