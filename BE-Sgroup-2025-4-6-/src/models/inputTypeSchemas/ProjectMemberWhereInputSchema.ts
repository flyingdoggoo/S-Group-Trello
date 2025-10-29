import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProjectScalarRelationFilterSchema } from './ProjectScalarRelationFilterSchema';
import { projectWhereInputSchema } from './projectWhereInputSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { RolesScalarRelationFilterSchema } from './RolesScalarRelationFilterSchema';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';

export const ProjectMemberWhereInputSchema: z.ZodType<Prisma.ProjectMemberWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProjectMemberWhereInputSchema), z.lazy(() => ProjectMemberWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectMemberWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectMemberWhereInputSchema), z.lazy(() => ProjectMemberWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  project: z.union([ z.lazy(() => ProjectScalarRelationFilterSchema), z.lazy(() => projectWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RolesScalarRelationFilterSchema), z.lazy(() => rolesWhereInputSchema) ]).optional(),
});

export default ProjectMemberWhereInputSchema;
