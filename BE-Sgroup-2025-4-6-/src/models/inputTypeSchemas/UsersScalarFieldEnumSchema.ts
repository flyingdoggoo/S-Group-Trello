import { z } from 'zod';

export const UsersScalarFieldEnumSchema = z.enum(['id','email','name','bio','address','avatar','verify','status','createdAt','updatedAt','deletedAt']);

export default UsersScalarFieldEnumSchema;
