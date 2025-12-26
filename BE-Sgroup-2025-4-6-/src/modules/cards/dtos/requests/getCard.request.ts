import z from "zod";
import { ZodValidationSchema } from "@/common";
import { CardStatusEnum } from "@prisma/client";

export class GetCardsRequestDto {
    title?: string;
    status?: CardStatusEnum;
    position?: number;
    page?: number;
    limit?: number;

    constructor(data?: Partial<GetCardsRequestDto> | any) {
        this.title = data?.title;
        this.status = data?.status;
        this.position = data?.position ? parseInt(data.position as string, 10) : undefined;
        this.page = data?.page ? parseInt(data.page as string, 10) : 1;
        this.limit = data?.limit ? parseInt(data.limit as string, 10) : 10;
    }
}

const getCardsRequestQuery = z.object({
    title: z.string().optional(),
    status: z.nativeEnum(CardStatusEnum).optional(),
    position: z.coerce.number().int().optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().optional().default(10),
}).strict();

export const GetCardsRequestValidationSchema: ZodValidationSchema = {
    query: getCardsRequestQuery
}
