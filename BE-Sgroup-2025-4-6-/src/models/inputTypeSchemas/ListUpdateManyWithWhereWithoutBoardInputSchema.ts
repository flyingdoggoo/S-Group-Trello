import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListScalarWhereInputSchema } from './ListScalarWhereInputSchema';
import { ListUpdateManyMutationInputSchema } from './ListUpdateManyMutationInputSchema';
import { ListUncheckedUpdateManyWithoutBoardInputSchema } from './ListUncheckedUpdateManyWithoutBoardInputSchema';

export const ListUpdateManyWithWhereWithoutBoardInputSchema: z.ZodType<Prisma.ListUpdateManyWithWhereWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => ListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ListUpdateManyMutationInputSchema), z.lazy(() => ListUncheckedUpdateManyWithoutBoardInputSchema) ]),
});

export default ListUpdateManyWithWhereWithoutBoardInputSchema;
