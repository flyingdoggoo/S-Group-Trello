import z from "zod";
import { CardResponseDtoSchema } from "./card.response";

export class GetCardsResponseDto {
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

export const GetCardsResponseDtoSchema = z.object({
    data: z.array(CardResponseDtoSchema),
    total: z.number(),
    page: z.number(),
    limit: z.number(),
});
