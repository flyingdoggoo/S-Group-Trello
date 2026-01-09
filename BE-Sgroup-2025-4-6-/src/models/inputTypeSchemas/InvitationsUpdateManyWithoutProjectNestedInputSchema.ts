import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsCreateWithoutProjectInputSchema } from './InvitationsCreateWithoutProjectInputSchema';
import { InvitationsUncheckedCreateWithoutProjectInputSchema } from './InvitationsUncheckedCreateWithoutProjectInputSchema';
import { InvitationsCreateOrConnectWithoutProjectInputSchema } from './InvitationsCreateOrConnectWithoutProjectInputSchema';
import { InvitationsUpsertWithWhereUniqueWithoutProjectInputSchema } from './InvitationsUpsertWithWhereUniqueWithoutProjectInputSchema';
import { InvitationsCreateManyProjectInputEnvelopeSchema } from './InvitationsCreateManyProjectInputEnvelopeSchema';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsUpdateWithWhereUniqueWithoutProjectInputSchema } from './InvitationsUpdateWithWhereUniqueWithoutProjectInputSchema';
import { InvitationsUpdateManyWithWhereWithoutProjectInputSchema } from './InvitationsUpdateManyWithWhereWithoutProjectInputSchema';
import { InvitationsScalarWhereInputSchema } from './InvitationsScalarWhereInputSchema';

export const InvitationsUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.InvitationsUpdateManyWithoutProjectNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => InvitationsCreateWithoutProjectInputSchema), z.lazy(() => InvitationsCreateWithoutProjectInputSchema).array(), z.lazy(() => InvitationsUncheckedCreateWithoutProjectInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationsCreateOrConnectWithoutProjectInputSchema), z.lazy(() => InvitationsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvitationsUpsertWithWhereUniqueWithoutProjectInputSchema), z.lazy(() => InvitationsUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationsCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvitationsUpdateWithWhereUniqueWithoutProjectInputSchema), z.lazy(() => InvitationsUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvitationsUpdateManyWithWhereWithoutProjectInputSchema), z.lazy(() => InvitationsUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvitationsScalarWhereInputSchema), z.lazy(() => InvitationsScalarWhereInputSchema).array() ]).optional(),
});

export default InvitationsUpdateManyWithoutProjectNestedInputSchema;
