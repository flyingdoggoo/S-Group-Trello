import z from "zod";
import { ZodValidationSchema } from "@/common";

export class CreateProjectRequestDto {
    title: string;
    description?: string;

    constructor(data?: Partial<CreateProjectRequestDto>) {
        this.title = data?.title!;
        this.description = data?.description;
    }
}

const createProjectRequestSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().optional()
}).strict();

export const CreateProjectRequestValidationSchema: ZodValidationSchema = {
    body: createProjectRequestSchema
}
