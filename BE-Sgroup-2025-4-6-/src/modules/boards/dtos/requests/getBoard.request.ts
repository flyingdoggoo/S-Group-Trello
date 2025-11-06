import z from "zod";
import { ZodValidationSchema } from "@/common";
import { BoardStatusEnum } from "@prisma/client";

export class GetBoardsRequestDto {
    title?: string;
    status?: BoardStatusEnum;
    page?: number;
    limit?: number;

    constructor(data?: Partial<GetBoardsRequestDto> | any) {
        this.title = data?.title;
        this.status = data?.status;
        this.page = data?.page ? parseInt(data.page as string, 10) : 1;
        this.limit = data?.limit ? parseInt(data.limit as string, 10) : 10;
    }
}

const getBoardsRequestQuery = z.object({
    title: z.string().optional(),
    status: z.nativeEnum(BoardStatusEnum).optional(),
    page: z.coerce.number().int().positive().optional().default(1),
    limit: z.coerce.number().int().positive().optional().default(10),
}).strict();

export const GetBoardsRequestValidationSchema: ZodValidationSchema = {
    query: getBoardsRequestQuery
}
