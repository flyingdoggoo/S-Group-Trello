import { PrismaService } from "../database/prisma.service";

export class BoardMembersRepository {
    constructor(private readonly prisma = new PrismaService()) {}
    async assignUserRoleBoard(boardId: string, userId: string, roleId: string) {
        return this.prisma.boardMember.create({
            data: {
                boardId,
                userId,
                roleId,
            },
        });
    }
}