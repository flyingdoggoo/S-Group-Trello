import z from "zod";
import { ZodValidationSchema } from "@/common";

export class UpdateBoardRequestDto {
    title?: string;
    description?: string;

    constructor(data?: Partial<UpdateBoardRequestDto>) {
        this.title = data?.title;
        this.description = data?.description;
    }
}

const updateBoardRequestSchema = z.object({
    title: z.string().min(1).optional(),
    description: z.string().optional()
}).strict();

export const UpdateBoardRequestValidationSchema: ZodValidationSchema = {
    body: updateBoardRequestSchema
}
