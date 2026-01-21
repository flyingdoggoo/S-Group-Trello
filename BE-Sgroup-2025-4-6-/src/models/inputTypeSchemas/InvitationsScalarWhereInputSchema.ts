import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumInvitationStatusEnumFilterSchema } from './EnumInvitationStatusEnumFilterSchema';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const InvitationsScalarWhereInputSchema: z.ZodType<Prisma.InvitationsScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => InvitationsScalarWhereInputSchema), z.lazy(() => InvitationsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvitationsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvitationsScalarWhereInputSchema), z.lazy(() => InvitationsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  boardId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumInvitationStatusEnumFilterSchema), z.lazy(() => InvitationStatusEnumSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  acceptedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export default InvitationsScalarWhereInputSchema;
