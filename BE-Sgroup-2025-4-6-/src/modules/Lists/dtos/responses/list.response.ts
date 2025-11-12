import { ListStatusEnum } from "@prisma/client";
import { List } from "@/models/modelSchema/ListSchema";
import z from "zod";

export class ListResponseDto {
    id: string;
    title: string;
    status: ListStatusEnum;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: List) {
        this.id = data.id;
        this.title = data.title;
        this.status = data.status;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}

export const ListResponseDtoSchema = z.object({
    id: z.string(),
    title: z.string(),
    status: z.nativeEnum(ListStatusEnum),
    createdAt: z.date(),
    updatedAt: z.date(),
});
