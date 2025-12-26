import z from "zod";
import { ListResponseDtoSchema } from "./list.response";

export class GetListsResponseDto {
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

export const GetListsResponseDtoSchema = z.object({
    data: z.array(ListResponseDtoSchema),
    total: z.number(),
    page: z.number(),
    limit: z.number(),
});
