import { BoardStatusEnum } from '@prisma/client';
import { PrismaService } from '../database';
import { Board } from '@/models/modelSchema/BoardSchema';

export class BoardsRepository {
    constructor(private readonly prismaService = new PrismaService()) { }

    async createBoard({ projectId, title, description }: { projectId: string, title: string, description?: string }): Promise<Board> {
        return this.prismaService.board.create({
            data: {
                projectId,
                title,
                description,
            },
        });
    }

    async findBoards({ projectId, title, status, skip, take }: { projectId: string, title?: string, status?: BoardStatusEnum, skip: number, take: number }): Promise<[Board[], number]> {
        const where: any = {};
        
        where.projectId = projectId;
        
        if (title) {
            where.title = { contains: title, mode: 'insensitive' };
        }
        
        if (status) {
            where.status = status;
        }

        where.deletedAt = null;
        

        const result = await Promise.all([
            this.prismaService.board.findMany({
                where,
                skip,
                take,
                orderBy: {
                    createdAt: 'desc'
                }
            }),
            this.prismaService.board.count({
                where,
            })
        ]);
        
        return result;
    }

    async findBoardById({ id, projectId }: { id: string, projectId: string }): Promise<Board | null> {
        return this.prismaService.board.findFirst({
            where: { 
                id,
                projectId,
                deletedAt: null 
            },
        });
    }

    async updateBoard({ id, projectId, title, description }: { id: string, projectId: string, title?: string, description?: string }): Promise<Board> {
        const data: any = {};
        
        if (title !== undefined) {
            data.title = title;
        }
        
        if (description !== undefined) {
            data.description = description;
        }

        return this.prismaService.board.update({
            where: { id },
            data,
        });
    }

    async deleteBoard({ id, projectId }: { id: string, projectId: string }): Promise<Board> {
        // Soft delete
        return this.prismaService.board.update({
            where: { id },
            data: {
                deletedAt: new Date(),
                status: BoardStatusEnum.deleted
            },
        });
    }

}
