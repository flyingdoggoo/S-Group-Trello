import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectCreateWithoutInvitationInputSchema } from './projectCreateWithoutInvitationInputSchema';
import { projectUncheckedCreateWithoutInvitationInputSchema } from './projectUncheckedCreateWithoutInvitationInputSchema';
import { projectCreateOrConnectWithoutInvitationInputSchema } from './projectCreateOrConnectWithoutInvitationInputSchema';
import { projectWhereUniqueInputSchema } from './projectWhereUniqueInputSchema';

export const projectCreateNestedOneWithoutInvitationInputSchema: z.ZodType<Prisma.projectCreateNestedOneWithoutInvitationInput> = z.strictObject({
  create: z.union([ z.lazy(() => projectCreateWithoutInvitationInputSchema), z.lazy(() => projectUncheckedCreateWithoutInvitationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => projectCreateOrConnectWithoutInvitationInputSchema).optional(),
  connect: z.lazy(() => projectWhereUniqueInputSchema).optional(),
});

export default projectCreateNestedOneWithoutInvitationInputSchema;
