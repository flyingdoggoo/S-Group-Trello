import z from "zod";
import { ZodValidationSchema } from "@/common";
import { CardStatusEnum } from "@prisma/client";

export class UpdateCardRequestDto {
    title?: string;
    description?: string | null;
    position?: number;
    status?: CardStatusEnum;
    listId?: string; // move card to another list

    constructor(data?: Partial<UpdateCardRequestDto>) {
        this.title = data?.title;
        this.description = data?.description;
        this.position = typeof data?.position === 'number' ? data.position : undefined;
        this.status = data?.status;
        this.listId = data?.listId;
    }
}

const updateCardRequestSchema = z.object({
    title: z.string().min(1).optional(),
    description: z.string().nullable().optional(),
    position: z.number().int().nonnegative().optional(),
    status: z.nativeEnum(CardStatusEnum).optional(),
    listId: z.string().uuid().optional(),
}).strict();

export const UpdateCardRequestValidationSchema: ZodValidationSchema = {
    body: updateCardRequestSchema
}
