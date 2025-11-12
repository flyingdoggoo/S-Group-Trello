import z from "zod";
import { ZodValidationSchema } from "@/common";

export class CreateCardRequestDto {
    title: string;
    description?: string;
    position?: number; // ordering index within list

    constructor(data?: Partial<CreateCardRequestDto>) {
        this.title = data?.title ?? '';
        this.description = data?.description;
        this.position = typeof data?.position === 'number' ? data.position : undefined;
    }
}

const createCardRequestSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().optional(),
    position: z.number().int().nonnegative().optional(),
}).strict();

export const CreateCardRequestValidationSchema: ZodValidationSchema = {
    body: createCardRequestSchema
}
