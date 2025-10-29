import { z } from 'zod';

export const UserStatusEnumSchema = z.enum(['active','locked']);

export type UserStatusEnumType = `${z.infer<typeof UserStatusEnumSchema>}`

export default UserStatusEnumSchema;
