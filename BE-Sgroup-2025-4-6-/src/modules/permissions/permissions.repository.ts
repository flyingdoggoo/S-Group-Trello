import { PrismaService } from '../database';

export class PermissionsRepository {
    constructor(private readonly prismaService = new PrismaService()) {}

    /**
     * Check whether a user has a given permission via role assignments.
     * Schema path: users -> UserRole -> roles -> RolePermission -> permission.permission
     */
    async hasPermission(userId: string, permission: string): Promise<boolean> {
        // Quick existence check for user
        const user = await this.prismaService.users.findFirst({
            where: { id: userId },
            select: { id: true }
        });
        if (!user) return false;

        // Look for any role assigned to this user that is linked to the target permission
        const match = await this.prismaService.rolePermission.findFirst({
            where: {
                deletedAt: null,
                role: {
                    deletedAt: null,
                    UserRole: { some: { userId } },
                },
                permission: {
                    deletedAt: null,
                    permission: permission,
                },
            },
            select: { id: true },
        });

        return !!match;
    }
}