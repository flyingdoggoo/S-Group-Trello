import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectCreateWithoutMembersInputSchema } from './projectCreateWithoutMembersInputSchema';
import { projectUncheckedCreateWithoutMembersInputSchema } from './projectUncheckedCreateWithoutMembersInputSchema';
import { projectCreateOrConnectWithoutMembersInputSchema } from './projectCreateOrConnectWithoutMembersInputSchema';
import { projectUpsertWithoutMembersInputSchema } from './projectUpsertWithoutMembersInputSchema';
import { projectWhereUniqueInputSchema } from './projectWhereUniqueInputSchema';
import { projectUpdateToOneWithWhereWithoutMembersInputSchema } from './projectUpdateToOneWithWhereWithoutMembersInputSchema';
import { projectUpdateWithoutMembersInputSchema } from './projectUpdateWithoutMembersInputSchema';
import { projectUncheckedUpdateWithoutMembersInputSchema } from './projectUncheckedUpdateWithoutMembersInputSchema';

export const projectUpdateOneRequiredWithoutMembersNestedInputSchema: z.ZodType<Prisma.projectUpdateOneRequiredWithoutMembersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => projectCreateWithoutMembersInputSchema), z.lazy(() => projectUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => projectCreateOrConnectWithoutMembersInputSchema).optional(),
  upsert: z.lazy(() => projectUpsertWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => projectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => projectUpdateToOneWithWhereWithoutMembersInputSchema), z.lazy(() => projectUpdateWithoutMembersInputSchema), z.lazy(() => projectUncheckedUpdateWithoutMembersInputSchema) ]).optional(),
});

export default projectUpdateOneRequiredWithoutMembersNestedInputSchema;
