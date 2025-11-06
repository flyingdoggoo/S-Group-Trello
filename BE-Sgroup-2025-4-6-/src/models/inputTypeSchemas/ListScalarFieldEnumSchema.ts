import { z } from 'zod';

export const ListScalarFieldEnumSchema = z.enum(['id','boardId','title','position','createdAt','updatedAt','deletedAt']);

export default ListScalarFieldEnumSchema;
