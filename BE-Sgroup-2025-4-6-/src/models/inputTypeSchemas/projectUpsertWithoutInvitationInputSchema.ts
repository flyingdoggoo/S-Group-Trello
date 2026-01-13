import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectUpdateWithoutInvitationInputSchema } from './projectUpdateWithoutInvitationInputSchema';
import { projectUncheckedUpdateWithoutInvitationInputSchema } from './projectUncheckedUpdateWithoutInvitationInputSchema';
import { projectCreateWithoutInvitationInputSchema } from './projectCreateWithoutInvitationInputSchema';
import { projectUncheckedCreateWithoutInvitationInputSchema } from './projectUncheckedCreateWithoutInvitationInputSchema';
import { projectWhereInputSchema } from './projectWhereInputSchema';

export const projectUpsertWithoutInvitationInputSchema: z.ZodType<Prisma.projectUpsertWithoutInvitationInput> = z.strictObject({
  update: z.union([ z.lazy(() => projectUpdateWithoutInvitationInputSchema), z.lazy(() => projectUncheckedUpdateWithoutInvitationInputSchema) ]),
  create: z.union([ z.lazy(() => projectCreateWithoutInvitationInputSchema), z.lazy(() => projectUncheckedCreateWithoutInvitationInputSchema) ]),
  where: z.lazy(() => projectWhereInputSchema).optional(),
});

export default projectUpsertWithoutInvitationInputSchema;
