import { PrismaService } from '../database';
import { Card } from '@/models/modelSchema/CardSchema';
import { CardStatusEnum } from '@prisma/client';

export class CardsRepository {
    constructor(private readonly prismaService = new PrismaService()) { }

    async createCard({ listId, title, description, position }: { listId: string, title: string, description?: string, position: number }): Promise<Card> {
        return this.prismaService.card.create({
            data: {
                listId,
                title,
                description,
                position,
            },
        });
    }

    async getNextPosition(listId: string): Promise<number> {
        const last = await this.prismaService.card.findFirst({
            where: { listId, deletedAt: null },
            orderBy: { position: 'desc' },
            select: { position: true }
        });
        return last ? last.position + 1 : 0;
    }

    async findCards({ listId, title, status, skip, take }: { listId: string, title?: string, status?: CardStatusEnum, skip: number, take: number }): Promise<[Card[], number]> {
        const where: any = { listId, deletedAt: null };
        if (title) {
            where.title = { contains: title, mode: 'insensitive' };
        }
        if (status) {
            where.status = status;
        }

        const result = await Promise.all([
            this.prismaService.card.findMany({
                where,
                skip,
                take,
                orderBy: { position: 'asc' }
            }),
            this.prismaService.card.count({ where })
        ]);
        return result;
    }

    async findCardById({ id, listId }: { id: string, listId: string }): Promise<Card | null> {
        return this.prismaService.card.findFirst({
            where: {
                id,
                listId,
                deletedAt: null
            },
            include: {
                tags: true,
                todos: { orderBy: { position: 'asc' } },
                members: {
                    include: {
                        user: {
                            select: { id: true, name: true, avatar: true }
                        }
                    }
                },
                comments: {
                    include: {
                        user: {
                            select: { id: true, name: true, avatar: true }
                        }
                    },
                    orderBy: { createdAt: 'desc' }
                }
            }
        });
    }

    async updateCard({ id, listId, title, description, position, status }: { id: string, listId?: string, title?: string, description?: string | null, position?: number, status?: CardStatusEnum }): Promise<Card> {
        const data: any = {};
        if (title !== undefined) data.title = title;
        if (description !== undefined) data.description = description;
        if (typeof position === 'number') data.position = position;
        if (status) data.status = status;
        if (listId) data.listId = listId;

        return this.prismaService.card.update({ where: { id }, data });
    }

    async deleteCard({ id }: { id: string }): Promise<Card> {
        return this.prismaService.card.update({
            where: { id },
            data: {
                deletedAt: new Date(),
                status: CardStatusEnum.deleted,
            },
        });
    }

    // Tags
    async createTag({ cardId, name, color }: { cardId: string, name: string, color: string }) {
        return this.prismaService.cardTag.create({
            data: { cardId, name, color }
        });
    }

    async deleteTag({ id }: { id: string }) {
        return this.prismaService.cardTag.delete({ where: { id } });
    }

    // Todos
    async getNextTodoPosition(cardId: string): Promise<number> {
        const last = await this.prismaService.cardTodo.findFirst({
            where: { cardId },
            orderBy: { position: 'desc' },
            select: { position: true }
        });
        return last ? last.position + 1 : 0;
    }

    async createTodo({ cardId, title, position }: { cardId: string, title: string, position: number }) {
        return this.prismaService.cardTodo.create({
            data: { cardId, title, position }
        });
    }

    async updateTodo({ id, completed }: { id: string, completed: boolean }) {
        return this.prismaService.cardTodo.update({
            where: { id },
            data: { completed }
        });
    }

    async deleteTodo({ id }: { id: string }) {
        return this.prismaService.cardTodo.delete({ where: { id } });
    }

    // Members
    async addMember({ cardId, userId }: { cardId: string, userId: string }) {
        return this.prismaService.cardMember.create({
            data: { cardId, userId },
            include: {
                user: {
                    select: { id: true, name: true, avatar: true }
                }
            }
        });
    }

    async removeMember({ id }: { id: string }) {
        return this.prismaService.cardMember.delete({ where: { id } });
    }

    // Comments
    async createComment({ cardId, userId, content }: { cardId: string, userId: string, content: string }) {
        return this.prismaService.cardComment.create({
            data: { cardId, userId, content },
            include: {
                user: {
                    select: { id: true, name: true, avatar: true }
                }
            }
        });
    }

    async deleteComment({ id }: { id: string }) {
        return this.prismaService.cardComment.delete({ where: { id } });
    }
}
