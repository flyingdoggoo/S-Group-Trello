import { PrismaService } from '../database';
import { project } from '@/models/modelSchema/projectSchema';
import { ProjectStatusEnum } from '@prisma/client';
import { toSlug } from '@/common/utils';

export class ProjectsRepository {
    constructor(private readonly prismaService = new PrismaService()) { }

    private async buildUniqueSlug(title: string): Promise<string> {
        const baseSlug = toSlug(title, 'project');
        let candidate = baseSlug;
        let index = 1;

        // Keep incrementing suffix until the generated slug is unique.
        while (true) {
            const existing = await this.prismaService.project.findFirst({
                where: { slug: candidate },
                select: { id: true },
            });

            if (!existing) {
                return candidate;
            }

            index += 1;
            candidate = `${baseSlug}-${index}`;
        }
    }

    async createProject({ title, description }: { title: string, description?: string }): Promise<project> {
        const slug = await this.buildUniqueSlug(title);

        return this.prismaService.project.create({
            data: {
                slug,
                title,
                description,
            },
        });
    }

    async findProjects({ userId, title, status, skip, take }: { userId?: string, title?: string, status?: ProjectStatusEnum, skip: number, take: number }): Promise<[project[], number]> {
        const where: any = {};
        
        
        if (title) {
            where.title = { contains: title, mode: 'insensitive' };
        }
        
        if (status) {
            where.status = status;
        }

        where.deletedAt = null;
        if (userId) {
            where.OR = [
                {
                    members: {
                        some: { userId },
                    },
                },
                {
                    Board: {
                        some: {
                            deletedAt: null,
                            BoardMember: {
                                some: { userId },
                            },
                        },
                    },
                },
            ];
        }
        

        const result = await Promise.all([
            this.prismaService.project.findMany({
                where,
                skip,
                take,
                orderBy: {
                    createdAt: 'desc'
                },
                include: {
                    ...(userId
                        ? {
                              members: {
                                  where: { userId },
                                  select: { id: true },
                              },
                          }
                        : {}),
                    Board: {
                        where: {
                            deletedAt: null
                        },
                        select: {
                            id: true,
                            slug: true,
                            title: true,
                            description: true,
                            ...(userId
                                ? {
                                      BoardMember: {
                                          where: { userId },
                                          select: { id: true },
                                      },
                                  }
                                : {}),
                        }
                    }
                }
            }),
            this.prismaService.project.count({
                where,
            })
        ]);
        
        return result;
    }

    async findProjectById({ id }: { id: string }): Promise<project | null> {
        return this.prismaService.project.findFirst({
            where: { 
                OR: [{ id }, { slug: id }],
                deletedAt: null 
            },
        });
    }

    async updateProject({ id, title, description }: { id: string, title?: string, description?: string }): Promise<project> {
        const targetProject = await this.findProjectById({ id });
        if (!targetProject) {
            throw new Error('Project not found');
        }

        const data: any = {};
        
        if (title !== undefined) {
            data.title = title;
        }
        
        if (description !== undefined) {
            data.description = description;
        }

        return this.prismaService.project.update({
            where: { id: targetProject.id },
            data,
        });
    }

    async deleteProject({ id }: { id: string }): Promise<project> {
        const targetProject = await this.findProjectById({ id });
        if (!targetProject) {
            throw new Error('Project not found');
        }

        // Soft delete
        return this.prismaService.project.update({
            where: { id: targetProject.id },
            data: {
                deletedAt: new Date(),
                status: ProjectStatusEnum.deleted
            },
        });
    }

    async archiveProject({ id }: { id: string }): Promise<project> {
        const targetProject = await this.findProjectById({ id });
        if (!targetProject) {
            throw new Error('Project not found');
        }

        return this.prismaService.project.update({
            where: { id: targetProject.id },
            data: {
                status: ProjectStatusEnum.archived
            },
        });
    }

    // async a({ id }: { id: string }): Promise<project> {
    //     return this.prismaService.project.create({
    //         data: {
    //             members:{
    //                 create:{
    //                     user: {
    //                         connect: {
    //                             id
    //                         }
    //                     },
    //                     role: {

    //                     }
    //                 }
    //             }

    //         },
    //     });
    // }
}
