import { CardStatusEnum } from "@prisma/client";
import { Card } from "@/models/modelSchema/CardSchema";
import z from "zod";

export class CardResponseDto {
    id: string;
    listId: string;
    title: string;
    description?: string | null;
    position: number;
    status: CardStatusEnum;
    createdAt: Date;
    updatedAt: Date;
    tags?: any[];
    todos?: any[];
    members?: any[];
    comments?: any[];

    constructor(data: Card & { tags?: any[], todos?: any[], members?: any[], comments?: any[] }) {
        this.id = data.id;
        this.listId = data.listId;
        this.title = data.title;
        this.description = data.description ?? null;
        this.position = data.position;
        this.status = data.status;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.tags = data.tags || [];
        this.todos = data.todos || [];
        this.members = data.members || [];
        this.comments = data.comments || [];
    }
}

export const CardResponseDtoSchema = z.object({
    id: z.string(),
    listId: z.string(),
    title: z.string(),
    description: z.string().nullable().optional(),
    position: z.number(),
    status: z.nativeEnum(CardStatusEnum),
    createdAt: z.date(),
    updatedAt: z.date(),
});
