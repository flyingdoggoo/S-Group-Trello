import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectCreateWithoutBoardInputSchema } from './projectCreateWithoutBoardInputSchema';
import { projectUncheckedCreateWithoutBoardInputSchema } from './projectUncheckedCreateWithoutBoardInputSchema';
import { projectCreateOrConnectWithoutBoardInputSchema } from './projectCreateOrConnectWithoutBoardInputSchema';
import { projectUpsertWithoutBoardInputSchema } from './projectUpsertWithoutBoardInputSchema';
import { projectWhereUniqueInputSchema } from './projectWhereUniqueInputSchema';
import { projectUpdateToOneWithWhereWithoutBoardInputSchema } from './projectUpdateToOneWithWhereWithoutBoardInputSchema';
import { projectUpdateWithoutBoardInputSchema } from './projectUpdateWithoutBoardInputSchema';
import { projectUncheckedUpdateWithoutBoardInputSchema } from './projectUncheckedUpdateWithoutBoardInputSchema';

export const projectUpdateOneRequiredWithoutBoardNestedInputSchema: z.ZodType<Prisma.projectUpdateOneRequiredWithoutBoardNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => projectCreateWithoutBoardInputSchema), z.lazy(() => projectUncheckedCreateWithoutBoardInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => projectCreateOrConnectWithoutBoardInputSchema).optional(),
  upsert: z.lazy(() => projectUpsertWithoutBoardInputSchema).optional(),
  connect: z.lazy(() => projectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => projectUpdateToOneWithWhereWithoutBoardInputSchema), z.lazy(() => projectUpdateWithoutBoardInputSchema), z.lazy(() => projectUncheckedUpdateWithoutBoardInputSchema) ]).optional(),
});

export default projectUpdateOneRequiredWithoutBoardNestedInputSchema;
