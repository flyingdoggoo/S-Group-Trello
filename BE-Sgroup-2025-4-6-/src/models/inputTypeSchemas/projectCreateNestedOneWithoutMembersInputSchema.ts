import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectCreateWithoutMembersInputSchema } from './projectCreateWithoutMembersInputSchema';
import { projectUncheckedCreateWithoutMembersInputSchema } from './projectUncheckedCreateWithoutMembersInputSchema';
import { projectCreateOrConnectWithoutMembersInputSchema } from './projectCreateOrConnectWithoutMembersInputSchema';
import { projectWhereUniqueInputSchema } from './projectWhereUniqueInputSchema';

export const projectCreateNestedOneWithoutMembersInputSchema: z.ZodType<Prisma.projectCreateNestedOneWithoutMembersInput> = z.strictObject({
  create: z.union([ z.lazy(() => projectCreateWithoutMembersInputSchema), z.lazy(() => projectUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => projectCreateOrConnectWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => projectWhereUniqueInputSchema).optional(),
});

export default projectCreateNestedOneWithoutMembersInputSchema;
