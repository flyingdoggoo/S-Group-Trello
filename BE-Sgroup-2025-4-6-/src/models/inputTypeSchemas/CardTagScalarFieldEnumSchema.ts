import { z } from 'zod';

export const CardTagScalarFieldEnumSchema = z.enum(['id','cardId','name','color','createdAt']);

export default CardTagScalarFieldEnumSchema;
