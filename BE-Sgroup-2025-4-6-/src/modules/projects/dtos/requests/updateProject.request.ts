import z from "zod";
import { ZodValidationSchema } from "@/common";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export class UpdateProjectRequestDto {
    title?: string;
    description?: string;

    constructor(data?: Partial<UpdateProjectRequestDto>) {
        this.title = data?.title;
        this.description = data?.description;
    }
}

const updateProjectRequestSchema = z.object({
    title: z.string().min(1).optional().openapi({ example: 'Updated Project Title' }),
    description: z.string().optional().openapi({ example: 'Updated description' })
}).strict();

export const UpdateProjectRequestValidationSchema: ZodValidationSchema = {
    body: updateProjectRequestSchema
}

export const UpdateProjectRequestSchema = {
    body: {
        description: 'Update project information',
        content: {
            'application/json': {
                schema: updateProjectRequestSchema,
            },
        },
    },
}
