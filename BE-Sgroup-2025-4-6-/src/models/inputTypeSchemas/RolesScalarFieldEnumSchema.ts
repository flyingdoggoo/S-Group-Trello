import { z } from 'zod';

export const RolesScalarFieldEnumSchema = z.enum(['id','roleName','desciption','createdAt','updatedAt','deletedAt']);

export default RolesScalarFieldEnumSchema;
