import { PrismaService } from '../database';
import { List } from '@/models/modelSchema/ListSchema';
import { ListStatusEnum } from '@prisma/client';

export class ListsRepository {
    constructor(private readonly prismaService = new PrismaService()) { }

    async createList({ boardId, title, position }: { boardId: string, title: string, position: number }): Promise<List> {
        return this.prismaService.list.create({
            data: {
                boardId,
                title,
                position,
            },
        });
    }

    async getNextPosition(boardId: string): Promise<number> {
        const last = await this.prismaService.list.findFirst({
            where: { boardId, deletedAt: null },
            orderBy: { position: 'desc' },
            select: { position: true }
        });
        return last ? last.position + 1 : 0;
    }

    async findLists({ boardId, title, status, skip, take }: { boardId: string, title?: string, status?: ListStatusEnum, skip: number, take: number }): Promise<[List[], number]> {
        const where: any = {};
        where.boardId = boardId;
        if (title) {
            where.title = { contains: title, mode: 'insensitive' };
        }
        if (status) {
            where.status = status;
        }
        where.deletedAt = null;
        

        const result = await Promise.all([
            this.prismaService.list.findMany({
                where,
                skip,
                take,
                orderBy: {
                    createdAt: 'desc'
                }
            }),
            this.prismaService.list.count({
                where,
            })
        ]);
        
        return result;
    }

    async findListById({ id, boardId }: { id: string, boardId: string }): Promise<List | null> {
        return this.prismaService.list.findFirst({
            where: { 
                id,
                boardId,
                deletedAt: null 
            },
        });
    }

    async updateList({ id, boardId, title, position, status }: { id: string, boardId: string, title?: string, position?: number, status?: ListStatusEnum }): Promise<List> {
        const data: any = {};
        
        if (title !== undefined) {
            data.title = title;
        }
        
        if (typeof position === 'number') {
            data.position = position;
        }
        if (status) {
            data.status = status;
        }

        return this.prismaService.list.update({ where: { id }, data });
    }

    async deleteList({ id }: { id: string }): Promise<List> {
        // Soft delete using deletedAt
        return this.prismaService.list.update({
            where: { id },
            data: {
                deletedAt: new Date(),
                status: ListStatusEnum.deleted,
            },
        });
    }

}
