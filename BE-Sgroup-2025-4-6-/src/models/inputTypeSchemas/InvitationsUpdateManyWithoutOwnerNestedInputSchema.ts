import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsCreateWithoutOwnerInputSchema } from './InvitationsCreateWithoutOwnerInputSchema';
import { InvitationsUncheckedCreateWithoutOwnerInputSchema } from './InvitationsUncheckedCreateWithoutOwnerInputSchema';
import { InvitationsCreateOrConnectWithoutOwnerInputSchema } from './InvitationsCreateOrConnectWithoutOwnerInputSchema';
import { InvitationsUpsertWithWhereUniqueWithoutOwnerInputSchema } from './InvitationsUpsertWithWhereUniqueWithoutOwnerInputSchema';
import { InvitationsCreateManyOwnerInputEnvelopeSchema } from './InvitationsCreateManyOwnerInputEnvelopeSchema';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsUpdateWithWhereUniqueWithoutOwnerInputSchema } from './InvitationsUpdateWithWhereUniqueWithoutOwnerInputSchema';
import { InvitationsUpdateManyWithWhereWithoutOwnerInputSchema } from './InvitationsUpdateManyWithWhereWithoutOwnerInputSchema';
import { InvitationsScalarWhereInputSchema } from './InvitationsScalarWhereInputSchema';

export const InvitationsUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.InvitationsUpdateManyWithoutOwnerNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => InvitationsCreateWithoutOwnerInputSchema), z.lazy(() => InvitationsCreateWithoutOwnerInputSchema).array(), z.lazy(() => InvitationsUncheckedCreateWithoutOwnerInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationsCreateOrConnectWithoutOwnerInputSchema), z.lazy(() => InvitationsCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvitationsUpsertWithWhereUniqueWithoutOwnerInputSchema), z.lazy(() => InvitationsUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationsCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvitationsUpdateWithWhereUniqueWithoutOwnerInputSchema), z.lazy(() => InvitationsUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvitationsUpdateManyWithWhereWithoutOwnerInputSchema), z.lazy(() => InvitationsUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvitationsScalarWhereInputSchema), z.lazy(() => InvitationsScalarWhereInputSchema).array() ]).optional(),
});

export default InvitationsUpdateManyWithoutOwnerNestedInputSchema;
