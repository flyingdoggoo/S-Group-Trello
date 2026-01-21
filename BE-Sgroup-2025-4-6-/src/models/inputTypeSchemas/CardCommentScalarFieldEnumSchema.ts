import { z } from 'zod';

export const CardCommentScalarFieldEnumSchema = z.enum(['id','cardId','userId','content','createdAt','updatedAt']);

export default CardCommentScalarFieldEnumSchema;
