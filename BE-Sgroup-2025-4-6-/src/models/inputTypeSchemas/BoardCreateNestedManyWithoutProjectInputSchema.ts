import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateWithoutProjectInputSchema } from './BoardCreateWithoutProjectInputSchema';
import { BoardUncheckedCreateWithoutProjectInputSchema } from './BoardUncheckedCreateWithoutProjectInputSchema';
import { BoardCreateOrConnectWithoutProjectInputSchema } from './BoardCreateOrConnectWithoutProjectInputSchema';
import { BoardCreateManyProjectInputEnvelopeSchema } from './BoardCreateManyProjectInputEnvelopeSchema';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';

export const BoardCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.BoardCreateNestedManyWithoutProjectInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardCreateWithoutProjectInputSchema), z.lazy(() => BoardCreateWithoutProjectInputSchema).array(), z.lazy(() => BoardUncheckedCreateWithoutProjectInputSchema), z.lazy(() => BoardUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoardCreateOrConnectWithoutProjectInputSchema), z.lazy(() => BoardCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoardCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BoardWhereUniqueInputSchema), z.lazy(() => BoardWhereUniqueInputSchema).array() ]).optional(),
});

export default BoardCreateNestedManyWithoutProjectInputSchema;
