import z from "zod";
import { ZodValidationSchema } from "@/common";

export class CreateBoardRequestDto {
    title: string;
    description?: string;

    constructor(data?: Partial<CreateBoardRequestDto>) {
        this.title = data?.title!;
        this.description = data?.description;
    }
}

const createBoardRequestSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().optional()
}).strict();

export const CreateBoardRequestValidationSchema: ZodValidationSchema = {
    body: createBoardRequestSchema
}
