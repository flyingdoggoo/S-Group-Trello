import z from "zod";
import { ZodValidationSchema } from "@/common";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export class CreateProjectRequestDto {
    title: string;
    description?: string;

    constructor(data?: Partial<CreateProjectRequestDto>) {
        this.title = data?.title!;
        this.description = data?.description;
    }
}

const createProjectRequestSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }).openapi({ example: 'My New Project' }),
    description: z.string().optional().openapi({ example: 'Project description' })
}).strict();

export const CreateProjectRequestValidationSchema: ZodValidationSchema = {
    body: createProjectRequestSchema
}

export const CreateProjectRequestSchema = {
    body: {
        description: 'Create a new project',
        content: {
            'application/json': {
                schema: createProjectRequestSchema,
            },
        },
    },
}
