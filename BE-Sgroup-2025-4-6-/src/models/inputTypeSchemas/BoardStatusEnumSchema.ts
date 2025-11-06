import { z } from 'zod';

export const BoardStatusEnumSchema = z.enum(['active','archived','deleted']);

export type BoardStatusEnumType = `${z.infer<typeof BoardStatusEnumSchema>}`

export default BoardStatusEnumSchema;
