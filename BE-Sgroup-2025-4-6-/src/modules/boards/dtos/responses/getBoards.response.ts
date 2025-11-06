import z from "zod";
import { BoardResponseDtoSchema } from "./board.response";

export class GetBoardsResponseDto {
    data: Array<any>;
    total: number;
    page: number;
    limit: number;

    constructor(data: Array<any>, total: number, page: number, limit: number) {
        this.data = data;
        this.total = total;
        this.page = page;
        this.limit = limit;
    }
}

export const GetBoardsResponseDtoSchema = z.object({
    data: z.array(BoardResponseDtoSchema),
    total: z.number(),
    page: z.number(),
    limit: z.number(),
});
