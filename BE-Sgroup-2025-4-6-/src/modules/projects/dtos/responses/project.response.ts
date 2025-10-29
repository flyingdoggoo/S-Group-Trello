import { ProjectStatusEnum } from "@prisma/client";
import { project } from "@/models/modelSchema/projectSchema";
import z from "zod";

export class ProjectResponseDto {
    id: string;
    title: string;
    description: string | null;
    status: ProjectStatusEnum;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: project) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description ?? null;
        this.status = data.status;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}

export const ProjectResponseDtoSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().nullable(),
    status: z.nativeEnum(ProjectStatusEnum),
    createdAt: z.date(),
    updatedAt: z.date(),
});
