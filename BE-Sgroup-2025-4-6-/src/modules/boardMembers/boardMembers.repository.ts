import { PrismaService } from '../database/prisma.service';

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

	async isUserMemberOfBoard(boardId: string, userId: string): Promise<boolean> {
		const m = await this.prisma.boardMember.findFirst({
			where: { boardId, userId },
			select: { id: true },
		});
		return !!m;
	}

	async getBoardMembers(boardId: string) {
		return this.prisma.boardMember.findMany({
			where: { boardId },
			include: {
				user: {
					select: {
						id: true,
						name: true,
						email: true,
						avatar: true,
					},
				},
				role: {
					select: {
						id: true,
						roleName: true,
					},
				},
			},
		});
	}

	async changeRoleOfMemberBoard(boardId: string, userId: string, newRoleId: string) {
		return this.prisma.boardMember.updateMany({
			where: { boardId, userId },
			data: { roleId: newRoleId },
		});
	}
}
