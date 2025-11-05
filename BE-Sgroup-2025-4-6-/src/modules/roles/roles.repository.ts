import { PrismaService } from '../database';

export class RolesRepository {
    constructor(private readonly prismaService = new PrismaService()) {}
    async findRoleIdByUserId(userId: string) {
        if (!userId) {
            return null;
        }
        const userRole = await this.prismaService.userRole.findFirst({
            where: { userId },
        });
        return userRole ? userRole.roleId : null;
    }
    async findByName(roleName: string) {
        return this.prismaService.roles.findFirst({
            where: { roleName, deletedAt: null },
        });
    }
}