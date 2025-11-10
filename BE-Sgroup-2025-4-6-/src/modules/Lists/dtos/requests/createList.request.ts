import z from "zod";
import { ZodValidationSchema } from "@/common";

export class CreateListRequestDto {
    title: string;
    position: Int16Array;

    constructor(data?: Partial<CreateListRequestDto>) {
        this.title = data?.title!;
        this.position = data?.position!;
    }
}

const createListRequestSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
}).strict();

export const CreateListRequestValidationSchema: ZodValidationSchema = {
    body: createListRequestSchema
}
