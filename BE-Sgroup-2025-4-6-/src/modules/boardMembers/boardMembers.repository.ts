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

	async assignUserRoleBoardIfMissing(
		boardId: string,
		userId: string,
		roleId: string,
	) {
		const existingMember = await this.prisma.boardMember.findFirst({
			where: { boardId, userId },
			select: { id: true },
		});

		if (existingMember) {
			return existingMember;
		}

		return this.assignUserRoleBoard(boardId, userId, roleId);
	}

	async findBoardMemberWithRole(boardId: string, userId: string) {
		return this.prisma.boardMember.findFirst({
			where: { boardId, userId },
			include: {
				role: {
					select: {
						id: true,
						roleName: true,
					},
				},
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

	async isUserMemberOfAnyBoardInProject(
		projectId: string,
		userId: string,
	): Promise<boolean> {
		const membership = await this.prisma.boardMember.findFirst({
			where: {
				userId,
				board: {
					projectId,
					deletedAt: null,
				},
			},
			select: { id: true },
		});

		return !!membership;
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

	async removeMember(boardId: string, userId: string) {
		return this.prisma.boardMember.deleteMany({
			where: { boardId, userId },
		});
	}
}
