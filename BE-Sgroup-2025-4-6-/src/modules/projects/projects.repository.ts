import { PrismaService } from '../database';
import { project } from '@/models/modelSchema/projectSchema';
import { ProjectStatusEnum } from '@prisma/client';

export class ProjectsRepository {
    constructor(private readonly prismaService = new PrismaService()) { }

    async createProject({ title, description }: { title: string, description?: string }): Promise<project> {
        return this.prismaService.project.create({
            data: {
                title,
                description,
            },
        });
    }

    async findProjects({ title, status, skip, take }: { title?: string, status?: ProjectStatusEnum, skip: number, take: number }): Promise<[project[], number]> {
        const where: any = {};
        
        
        if (title) {
            where.title = { contains: title, mode: 'insensitive' };
        }
        
        if (status) {
            where.status = status;
        }

        // Không lấy các project đã bị xóa
        where.deletedAt = null;
        

        const result = await Promise.all([
            this.prismaService.project.findMany({
                where,
                skip,
                take,
                orderBy: {
                    createdAt: 'desc'
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
                id,
                deletedAt: null 
            },
        });
    }

    async updateProject({ id, title, description }: { id: string, title?: string, description?: string }): Promise<project> {
        const data: any = {};
        
        if (title !== undefined) {
            data.title = title;
        }
        
        if (description !== undefined) {
            data.description = description;
        }

        return this.prismaService.project.update({
            where: { id },
            data,
        });
    }

    async deleteProject({ id }: { id: string }): Promise<project> {
        // Soft delete
        return this.prismaService.project.update({
            where: { id },
            data: {
                deletedAt: new Date(),
                status: ProjectStatusEnum.deleted
            },
        });
    }

    async archiveProject({ id }: { id: string }): Promise<project> {
        return this.prismaService.project.update({
            where: { id },
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
