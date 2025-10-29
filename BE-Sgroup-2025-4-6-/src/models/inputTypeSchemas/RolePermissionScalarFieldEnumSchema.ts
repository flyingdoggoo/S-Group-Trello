import { z } from 'zod';

export const RolePermissionScalarFieldEnumSchema = z.enum(['id','roleId','permissionId','createdAt','updatedAt','deletedAt']);

export default RolePermissionScalarFieldEnumSchema;
