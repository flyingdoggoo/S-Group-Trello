import { z } from 'zod';

export const ProjectStatusEnumSchema = z.enum(['active','archived','deleted']);

export type ProjectStatusEnumType = `${z.infer<typeof ProjectStatusEnumSchema>}`

export default ProjectStatusEnumSchema;
