import { ProjectStatusEnum } from "@prisma/client";
import { project } from "@/models/modelSchema/projectSchema";
import z from "zod";

interface BoardPreview {
    id: string;
    title: string;
    description: string | null;
}

export class ProjectResponseDto {
    id: string;
    title: string;
    description: string | null;
    status: ProjectStatusEnum;
    createdAt: Date;
    updatedAt: Date;
    boardCount?: number;
    boards?: BoardPreview[];

    constructor(data: project & { boardCount?: number; boards?: BoardPreview[] }) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description ?? null;
        this.status = data.status;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.boardCount = data.boardCount;
        this.boards = data.boards;
    }
}

export const ProjectResponseDtoSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().nullable(),
    status: z.nativeEnum(ProjectStatusEnum),
    createdAt: z.date(),
    updatedAt: z.date(),
    boardCount: z.number().optional(),
    boards: z.array(z.object({
        id: z.string(),
        title: z.string(),
        description: z.string().nullable(),
    })).optional(),
});
