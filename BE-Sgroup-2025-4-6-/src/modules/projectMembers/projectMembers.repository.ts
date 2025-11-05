import { PrismaService } from "../database/prisma.service";

export class ProjectMembersRepository {
    constructor(private readonly projectMember = new PrismaService()) {}
    async assignUserRoleProject(projectId: string, userId: string, roleId: string) {
        return this.projectMember.projectMember.create({
            data: {
                projectId,
                userId,
                roleId,
            },
        });
    }
}