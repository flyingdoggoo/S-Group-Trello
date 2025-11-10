import { BoardStatusEnum } from "@prisma/client";
import { Board } from "@/models/modelSchema/BoardSchema";
import z from "zod";

export class BoardResponseDto {
    id: string;
    title: string;
    description: string | null;
    status: BoardStatusEnum;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Board) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description ?? null;
        this.status = data.status;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}

export const BoardResponseDtoSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().nullable(),
    status: z.nativeEnum(BoardStatusEnum),
    createdAt: z.date(),
    updatedAt: z.date(),
});
