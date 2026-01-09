import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsUpdateWithoutProjectInputSchema } from './InvitationsUpdateWithoutProjectInputSchema';
import { InvitationsUncheckedUpdateWithoutProjectInputSchema } from './InvitationsUncheckedUpdateWithoutProjectInputSchema';

export const InvitationsUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.InvitationsUpdateWithWhereUniqueWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => InvitationsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvitationsUpdateWithoutProjectInputSchema), z.lazy(() => InvitationsUncheckedUpdateWithoutProjectInputSchema) ]),
});

export default InvitationsUpdateWithWhereUniqueWithoutProjectInputSchema;
