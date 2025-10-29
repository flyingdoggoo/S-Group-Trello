import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumProjectStatusEnumFilterSchema } from './EnumProjectStatusEnumFilterSchema';
import { ProjectStatusEnumSchema } from './ProjectStatusEnumSchema';
import { ProjectMemberListRelationFilterSchema } from './ProjectMemberListRelationFilterSchema';

export const projectWhereInputSchema: z.ZodType<Prisma.projectWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => projectWhereInputSchema), z.lazy(() => projectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => projectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => projectWhereInputSchema), z.lazy(() => projectWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumProjectStatusEnumFilterSchema), z.lazy(() => ProjectStatusEnumSchema) ]).optional(),
  members: z.lazy(() => ProjectMemberListRelationFilterSchema).optional(),
});

export default projectWhereInputSchema;
