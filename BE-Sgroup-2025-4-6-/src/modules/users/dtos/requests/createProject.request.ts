import z from "zod";
import { ZodValidationSchema } from "@/common";
export class CreateProjectRequestDto {
    title: string;
    description: string;

    constructor(data?: Partial<CreateProjectRequestDto>) {
        this.title = data?.title!;
        this.description = data?.description!;
    }
    
}

const CreateProjectValidationSchema = z.object({
    title: z.string().nonempty({ message: 'Title is required' }),
    description: z.string().nonempty({ message: 'Description is required' })
}).strict();

export const CreateProjectRequestValidationSchema: ZodValidationSchema = {
    body: CreateProjectValidationSchema
}

export const CreateProjectRequestSchema = {
    body: CreateProjectValidationSchema
}
