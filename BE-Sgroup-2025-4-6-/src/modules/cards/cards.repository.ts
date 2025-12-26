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
}
