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
                permission: { deletedAt: null, permission },
                OR: [
                    { role: { deletedAt: null, UserRole: { some: { userId } } } },
                    { role: { deletedAt: null, projectMembers: { some: { userId } } } },
                    { role: { deletedAt: null, BoardMember: { some: { userId } } } },
                ],
            },
            select: { id: true },
        });

        return !!match;
    }
}