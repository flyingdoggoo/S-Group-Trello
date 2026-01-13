import { permission } from './../../models/modelSchema/permissionSchema';
import { PrismaService } from '../database/prisma.service';
import { ProjectRoleEnum } from '@/common/enums';

export class ProjectMembersRepository {
	constructor(private readonly prisma = new PrismaService()) {}
	async assignUserRoleProject(projectId: string, userId: string, roleId: string) {
		return this.prisma.projectMember.create({
			data: {
				projectId,
				userId,
				roleId,
			},
		});
	}
	async isUserMemberOfProject(projectId: string, userId: string): Promise<boolean> {
		const m = await this.prisma.projectMember.findFirst({
			where: { projectId, userId },
			select: { id: true },
		});
		return !!m;
	}

	async getProjectMembers(projectId: string) {
		return this.prisma.projectMember.findMany({
			where: { projectId },
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

	async changeRoleOfMemberProject(
		projectId: string,
		userId: string,
		newRoleId: string,
	) {
		return this.prisma.projectMember.updateMany({
			where: { projectId, userId },
			data: { roleId: newRoleId },
		});
	}

	async removeMember(projectId: string, userId: string) {
		return this.prisma.projectMember.deleteMany({
			where: { projectId, userId },
		});
	}
}
