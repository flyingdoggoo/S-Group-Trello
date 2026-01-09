import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectWhereUniqueInputSchema } from './projectWhereUniqueInputSchema';
import { projectCreateWithoutInvitationInputSchema } from './projectCreateWithoutInvitationInputSchema';
import { projectUncheckedCreateWithoutInvitationInputSchema } from './projectUncheckedCreateWithoutInvitationInputSchema';

export const projectCreateOrConnectWithoutInvitationInputSchema: z.ZodType<Prisma.projectCreateOrConnectWithoutInvitationInput> = z.strictObject({
  where: z.lazy(() => projectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => projectCreateWithoutInvitationInputSchema), z.lazy(() => projectUncheckedCreateWithoutInvitationInputSchema) ]),
});

export default projectCreateOrConnectWithoutInvitationInputSchema;
