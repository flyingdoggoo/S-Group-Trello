import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsUpdateWithoutOwnerInputSchema } from './InvitationsUpdateWithoutOwnerInputSchema';
import { InvitationsUncheckedUpdateWithoutOwnerInputSchema } from './InvitationsUncheckedUpdateWithoutOwnerInputSchema';
import { InvitationsCreateWithoutOwnerInputSchema } from './InvitationsCreateWithoutOwnerInputSchema';
import { InvitationsUncheckedCreateWithoutOwnerInputSchema } from './InvitationsUncheckedCreateWithoutOwnerInputSchema';

export const InvitationsUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.InvitationsUpsertWithWhereUniqueWithoutOwnerInput> = z.strictObject({
  where: z.lazy(() => InvitationsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvitationsUpdateWithoutOwnerInputSchema), z.lazy(() => InvitationsUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => InvitationsCreateWithoutOwnerInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutOwnerInputSchema) ]),
});

export default InvitationsUpsertWithWhereUniqueWithoutOwnerInputSchema;
