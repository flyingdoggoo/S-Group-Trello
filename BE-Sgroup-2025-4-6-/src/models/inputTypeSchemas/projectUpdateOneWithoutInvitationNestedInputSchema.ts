import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectCreateWithoutInvitationInputSchema } from './projectCreateWithoutInvitationInputSchema';
import { projectUncheckedCreateWithoutInvitationInputSchema } from './projectUncheckedCreateWithoutInvitationInputSchema';
import { projectCreateOrConnectWithoutInvitationInputSchema } from './projectCreateOrConnectWithoutInvitationInputSchema';
import { projectUpsertWithoutInvitationInputSchema } from './projectUpsertWithoutInvitationInputSchema';
import { projectWhereInputSchema } from './projectWhereInputSchema';
import { projectWhereUniqueInputSchema } from './projectWhereUniqueInputSchema';
import { projectUpdateToOneWithWhereWithoutInvitationInputSchema } from './projectUpdateToOneWithWhereWithoutInvitationInputSchema';
import { projectUpdateWithoutInvitationInputSchema } from './projectUpdateWithoutInvitationInputSchema';
import { projectUncheckedUpdateWithoutInvitationInputSchema } from './projectUncheckedUpdateWithoutInvitationInputSchema';

export const projectUpdateOneWithoutInvitationNestedInputSchema: z.ZodType<Prisma.projectUpdateOneWithoutInvitationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => projectCreateWithoutInvitationInputSchema), z.lazy(() => projectUncheckedCreateWithoutInvitationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => projectCreateOrConnectWithoutInvitationInputSchema).optional(),
  upsert: z.lazy(() => projectUpsertWithoutInvitationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => projectWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => projectWhereInputSchema) ]).optional(),
  connect: z.lazy(() => projectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => projectUpdateToOneWithWhereWithoutInvitationInputSchema), z.lazy(() => projectUpdateWithoutInvitationInputSchema), z.lazy(() => projectUncheckedUpdateWithoutInvitationInputSchema) ]).optional(),
});

export default projectUpdateOneWithoutInvitationNestedInputSchema;
