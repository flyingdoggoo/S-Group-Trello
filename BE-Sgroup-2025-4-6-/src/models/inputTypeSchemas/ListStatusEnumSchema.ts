import { z } from 'zod';

export const ListStatusEnumSchema = z.enum(['active','archived','deleted']);

export type ListStatusEnumType = `${z.infer<typeof ListStatusEnumSchema>}`

export default ListStatusEnumSchema;
