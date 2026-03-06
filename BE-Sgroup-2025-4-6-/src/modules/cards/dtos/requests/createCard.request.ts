import z from "zod";
import { ZodValidationSchema } from "@/common";

export class CreateCardRequestDto {
    listId: string;
    title: string;
    description?: string;
    position?: number; // ordering index within list

    constructor(data?: Partial<CreateCardRequestDto>) {
        this.listId = data?.listId ?? '';
        this.title = data?.title ?? '';
        this.description = data?.description;
        this.position = typeof data?.position === 'number' ? data.position : undefined;
    }
}

const createCardRequestSchema = z.object({
    listId: z.string().min(1, { message: 'listId is required' }),
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().optional(),
    position: z.number().int().nonnegative().optional(),
}).strict();

export const CreateCardRequestValidationSchema: ZodValidationSchema = {
    body: createCardRequestSchema
}
