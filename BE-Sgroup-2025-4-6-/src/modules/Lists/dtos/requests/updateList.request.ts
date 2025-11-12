import z from "zod";
import { ZodValidationSchema } from "@/common";

export class UpdateListRequestDto {
    title?: string;

    constructor(data?: Partial<UpdateListRequestDto>) {
        this.title = data?.title;
    }
}

const updateListRequestSchema = z.object({
    title: z.string().min(1).optional(),
}).strict();

export const UpdateListRequestValidationSchema: ZodValidationSchema = {
    body: updateListRequestSchema
}
