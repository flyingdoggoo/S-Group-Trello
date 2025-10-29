import { z } from 'zod';

export const PermissionScalarFieldEnumSchema = z.enum(['id','permission','createdAt','updatedAt','deletedAt']);

export default PermissionScalarFieldEnumSchema;
