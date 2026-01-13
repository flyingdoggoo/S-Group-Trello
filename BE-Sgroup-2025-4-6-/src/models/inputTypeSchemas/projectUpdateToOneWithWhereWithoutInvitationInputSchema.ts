import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectWhereInputSchema } from './projectWhereInputSchema';
import { projectUpdateWithoutInvitationInputSchema } from './projectUpdateWithoutInvitationInputSchema';
import { projectUncheckedUpdateWithoutInvitationInputSchema } from './projectUncheckedUpdateWithoutInvitationInputSchema';

export const projectUpdateToOneWithWhereWithoutInvitationInputSchema: z.ZodType<Prisma.projectUpdateToOneWithWhereWithoutInvitationInput> = z.strictObject({
  where: z.lazy(() => projectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => projectUpdateWithoutInvitationInputSchema), z.lazy(() => projectUncheckedUpdateWithoutInvitationInputSchema) ]),
});

export default projectUpdateToOneWithWhereWithoutInvitationInputSchema;
