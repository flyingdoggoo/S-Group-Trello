import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsUpdateWithoutOwnerInputSchema } from './InvitationsUpdateWithoutOwnerInputSchema';
import { InvitationsUncheckedUpdateWithoutOwnerInputSchema } from './InvitationsUncheckedUpdateWithoutOwnerInputSchema';

export const InvitationsUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.InvitationsUpdateWithWhereUniqueWithoutOwnerInput> = z.strictObject({
  where: z.lazy(() => InvitationsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvitationsUpdateWithoutOwnerInputSchema), z.lazy(() => InvitationsUncheckedUpdateWithoutOwnerInputSchema) ]),
});

export default InvitationsUpdateWithWhereUniqueWithoutOwnerInputSchema;
