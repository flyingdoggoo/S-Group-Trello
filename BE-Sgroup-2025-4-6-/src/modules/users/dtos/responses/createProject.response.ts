import {project} from '@/models';

export class CreateProjectResponseDto {
    id: string;
    userId: string;
    title: string;
    description: string | null;
    deletedAt: Date | null | undefined;
    updatedAt: Date | null | undefined;
    createdAt: Date;

    constructor(project: project) {
        this.id = project.id;
        this.title = project.title;
        this.description = project.description ?? null;
        this.deletedAt = project.deletedAt ?? null;
        this.updatedAt = project.updatedAt ?? null;
        this.createdAt = project.createdAt;
    }
    
}
