import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsUpdateWithoutProjectInputSchema } from './InvitationsUpdateWithoutProjectInputSchema';
import { InvitationsUncheckedUpdateWithoutProjectInputSchema } from './InvitationsUncheckedUpdateWithoutProjectInputSchema';
import { InvitationsCreateWithoutProjectInputSchema } from './InvitationsCreateWithoutProjectInputSchema';
import { InvitationsUncheckedCreateWithoutProjectInputSchema } from './InvitationsUncheckedCreateWithoutProjectInputSchema';

export const InvitationsUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.InvitationsUpsertWithWhereUniqueWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => InvitationsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvitationsUpdateWithoutProjectInputSchema), z.lazy(() => InvitationsUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => InvitationsCreateWithoutProjectInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutProjectInputSchema) ]),
});

export default InvitationsUpsertWithWhereUniqueWithoutProjectInputSchema;
