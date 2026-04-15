import { PrismaService } from "../database/prisma.service";

export class UserRoleRepository {
    constructor(private readonly userRole = new PrismaService()) {}

    async hasRole(userId: string, roleId: string): Promise<boolean> {
        const existing = await this.userRole.userRole.findFirst({
            where: {
                userId,
                roleId,
            },
            select: {
                id: true,
            },
        });

        return !!existing;
    }

    async assignUserRoleProject(userId: string, roleId: string) {
        return this.userRole.userRole.create({
            data: {
                userId,
                roleId,
            },
        });
    }
}