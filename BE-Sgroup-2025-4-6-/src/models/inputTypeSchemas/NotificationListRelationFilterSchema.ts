import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereInputSchema } from './NotificationWhereInputSchema';

export const NotificationListRelationFilterSchema: z.ZodType<Prisma.NotificationListRelationFilter> = z.strictObject({
  every: z.lazy(() => NotificationWhereInputSchema).optional(),
  some: z.lazy(() => NotificationWhereInputSchema).optional(),
  none: z.lazy(() => NotificationWhereInputSchema).optional(),
});

export default NotificationListRelationFilterSchema;
