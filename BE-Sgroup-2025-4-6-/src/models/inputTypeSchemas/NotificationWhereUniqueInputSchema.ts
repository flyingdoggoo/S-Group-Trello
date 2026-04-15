import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereInputSchema } from './NotificationWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumNotificationTypeEnumFilterSchema } from './EnumNotificationTypeEnumFilterSchema';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { UsersNullableScalarRelationFilterSchema } from './UsersNullableScalarRelationFilterSchema';
import { InvitationsNullableScalarRelationFilterSchema } from './InvitationsNullableScalarRelationFilterSchema';
import { InvitationsWhereInputSchema } from './InvitationsWhereInputSchema';

export const NotificationWhereUniqueInputSchema: z.ZodType<Prisma.NotificationWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => NotificationWhereInputSchema), z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationWhereInputSchema), z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  actorId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  invitationId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumNotificationTypeEnumFilterSchema), z.lazy(() => NotificationTypeEnumSchema) ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isRead: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  readAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
  actor: z.union([ z.lazy(() => UsersNullableScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional().nullable(),
  invitation: z.union([ z.lazy(() => InvitationsNullableScalarRelationFilterSchema), z.lazy(() => InvitationsWhereInputSchema) ]).optional().nullable(),
}));

export default NotificationWhereUniqueInputSchema;
