import z from "zod";
import { ZodValidationSchema } from "@/common";

export class CreateListRequestDto {
    boardId: string;
    title: string;
    position?: number; // ordering index within board

    constructor(data?: Partial<CreateListRequestDto>) {
        this.boardId = data?.boardId ?? '';
        this.title = data?.title ?? '';
        this.position = typeof data?.position === 'number' ? data.position : undefined;
    }
}

const createListRequestSchema = z.object({
    boardId: z.string().min(1, { message: 'boardId is required' }),
    title: z.string().min(1, { message: 'Title is required' }),
    position: z.number().int().nonnegative().optional(),
}).strict();

export const CreateListRequestValidationSchema: ZodValidationSchema = {
    body: createListRequestSchema
}
