import { z } from 'zod';

export const UserRoleScalarFieldEnumSchema = z.enum(['id','userId','roleId','assignedAt']);

export default UserRoleScalarFieldEnumSchema;
