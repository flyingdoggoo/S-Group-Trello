import { z } from 'zod';

export const ListScalarFieldEnumSchema = z.enum(['id','boardId','title','position','status','createdAt','updatedAt','deletedAt']);

export default ListScalarFieldEnumSchema;
