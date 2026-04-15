import { BoardStatusEnum } from '@prisma/client';
import { PrismaService } from '../database';
import { Board } from '@/models/modelSchema/BoardSchema';
import { toSlug } from '@/common/utils';

export class BoardsRepository {
    constructor(private readonly prismaService = new PrismaService()) { }

    private async buildUniqueSlug(title: string): Promise<string> {
        const baseSlug = toSlug(title, 'board');
        let candidate = baseSlug;
        let index = 1;

        // Keep incrementing suffix until the generated slug is unique.
        while (true) {
            const existing = await this.prismaService.board.findFirst({
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

    async createBoard({ projectId, title, description }: { projectId: string, title: string, description?: string }): Promise<Board> {
        const slug = await this.buildUniqueSlug(title);

        return this.prismaService.board.create({
            data: {
                slug,
                projectId,
                title,
                description,
            },
        });
    }

    async findBoards({ projectId, title, status, skip, take, userId }: { projectId: string, title?: string, status?: BoardStatusEnum, skip: number, take: number, userId?: string }): Promise<[Board[], number]> {
        const where: any = {};
        
        where.projectId = projectId;
        
        if (title) {
            where.title = { contains: title, mode: 'insensitive' };
        }
        
        if (status) {
            where.status = status;
        }

        where.deletedAt = null;

        if (userId) {
            where.BoardMember = {
                some: {
                    userId,
                },
            };
        }
        

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

    async findBoardIdsByProjectId(projectId: string): Promise<string[]> {
        const boards = await this.prismaService.board.findMany({
            where: {
                projectId,
                deletedAt: null,
            },
            select: {
                id: true,
            },
        });

        return boards.map((board) => board.id);
    }

    async findBoardById({ id, projectId }: { id: string, projectId: string }): Promise<Board | null> {
        return this.prismaService.board.findFirst({
            where: { 
                OR: [{ id }, { slug: id }],
                projectId,
                deletedAt: null 
            },
        });
    }

    async updateBoard({ id, projectId, title, description }: { id: string, projectId: string, title?: string, description?: string }): Promise<Board> {
        const targetBoard = await this.findBoardById({ id, projectId });
        if (!targetBoard) {
            throw new Error('Board not found');
        }

        const data: any = {};
        
        if (title !== undefined) {
            data.title = title;
        }
        
        if (description !== undefined) {
            data.description = description;
        }

        return this.prismaService.board.update({
            where: { id: targetBoard.id },
            data,
        });
    }

    async deleteBoard({ id, projectId }: { id: string, projectId: string }): Promise<Board> {
        const targetBoard = await this.findBoardById({ id, projectId });
        if (!targetBoard) {
            throw new Error('Board not found');
        }

        // Soft delete
        return this.prismaService.board.update({
            where: { id: targetBoard.id },
            data: {
                deletedAt: new Date(),
                status: BoardStatusEnum.deleted
            },
        });
    }

    async findBoardByIdSimple(id: string): Promise<Board | null> {
        return this.prismaService.board.findFirst({
            where: {
                OR: [{ id }, { slug: id }],
                deletedAt: null,
            },
        });
    }
}
