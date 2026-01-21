import { z } from 'zod';

export const CardStatusEnumSchema = z.enum(['active','archived','deleted']);

export type CardStatusEnumType = `${z.infer<typeof CardStatusEnumSchema>}`

export default CardStatusEnumSchema;
