import { PrismaService } from "../database/prisma.service";

export class UserRoleRepository {
    constructor(private readonly userRole = new PrismaService()) {}
    async assignUserRoleProject(userId: string, roleId: string) {
        return this.userRole.userRole.create({
            data: {
                userId,
                roleId,
            },
        });
    }
}