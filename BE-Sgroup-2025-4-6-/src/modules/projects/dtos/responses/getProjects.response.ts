import z from "zod";
import { ProjectResponseDtoSchema } from "./project.response";

export class GetProjectsResponseDto {
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

export const GetProjectsResponseDtoSchema = z.object({
    data: z.array(ProjectResponseDtoSchema),
    total: z.number(),
    page: z.number(),
    limit: z.number(),
});
