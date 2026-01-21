import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsCreateWithoutProjectInputSchema } from './InvitationsCreateWithoutProjectInputSchema';
import { InvitationsUncheckedCreateWithoutProjectInputSchema } from './InvitationsUncheckedCreateWithoutProjectInputSchema';
import { InvitationsCreateOrConnectWithoutProjectInputSchema } from './InvitationsCreateOrConnectWithoutProjectInputSchema';
import { InvitationsCreateManyProjectInputEnvelopeSchema } from './InvitationsCreateManyProjectInputEnvelopeSchema';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';

export const InvitationsCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.InvitationsCreateNestedManyWithoutProjectInput> = z.strictObject({
  create: z.union([ z.lazy(() => InvitationsCreateWithoutProjectInputSchema), z.lazy(() => InvitationsCreateWithoutProjectInputSchema).array(), z.lazy(() => InvitationsUncheckedCreateWithoutProjectInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationsCreateOrConnectWithoutProjectInputSchema), z.lazy(() => InvitationsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationsCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
});

export default InvitationsCreateNestedManyWithoutProjectInputSchema;
