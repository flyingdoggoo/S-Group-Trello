import { PrismaService } from "../database/prisma.service";

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
}