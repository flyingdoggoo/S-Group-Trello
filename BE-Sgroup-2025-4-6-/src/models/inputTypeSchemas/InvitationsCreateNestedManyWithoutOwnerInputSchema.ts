import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsCreateWithoutOwnerInputSchema } from './InvitationsCreateWithoutOwnerInputSchema';
import { InvitationsUncheckedCreateWithoutOwnerInputSchema } from './InvitationsUncheckedCreateWithoutOwnerInputSchema';
import { InvitationsCreateOrConnectWithoutOwnerInputSchema } from './InvitationsCreateOrConnectWithoutOwnerInputSchema';
import { InvitationsCreateManyOwnerInputEnvelopeSchema } from './InvitationsCreateManyOwnerInputEnvelopeSchema';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';

export const InvitationsCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.InvitationsCreateNestedManyWithoutOwnerInput> = z.strictObject({
  create: z.union([ z.lazy(() => InvitationsCreateWithoutOwnerInputSchema), z.lazy(() => InvitationsCreateWithoutOwnerInputSchema).array(), z.lazy(() => InvitationsUncheckedCreateWithoutOwnerInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationsCreateOrConnectWithoutOwnerInputSchema), z.lazy(() => InvitationsCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationsCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
});

export default InvitationsCreateNestedManyWithoutOwnerInputSchema;
