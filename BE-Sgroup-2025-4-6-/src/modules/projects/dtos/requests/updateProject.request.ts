import z from "zod";
import { ZodValidationSchema } from "@/common";

export class UpdateProjectRequestDto {
    title?: string;
    description?: string;

    constructor(data?: Partial<UpdateProjectRequestDto>) {
        this.title = data?.title;
        this.description = data?.description;
    }
}

const updateProjectRequestSchema = z.object({
    title: z.string().min(1).optional(),
    description: z.string().optional()
}).strict();

export const UpdateProjectRequestValidationSchema: ZodValidationSchema = {
    body: updateProjectRequestSchema
}
