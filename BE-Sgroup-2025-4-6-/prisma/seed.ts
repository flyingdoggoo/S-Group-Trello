import { PrismaClient } from "@prisma/client";
import { RolesEnum } from "../src/common/enums/roles.enum";
import { UserPermissionEnum } from "../src/common/enums/permissions/userPermission.enum";
import { ProjectPermissionEnum } from "../src/common/enums/permissions/projectPermission.enum";
import { BoardPermissionEnum } from "../src/common/enums/permissions/boardPermission.enum";

const prisma = new PrismaClient();

function enumValues<T extends Record<string, string>>(e: T): string[] {
    return Object.values(e);
}

async function seedRoles() {
    const roles = Object.values(RolesEnum).map((roleName) => ({ roleName }));
    await prisma.roles.createMany({ data: roles, skipDuplicates: true });
}

async function seedPermissions() {
    const permissions = new Set<string>();
    enumValues(UserPermissionEnum).forEach((p) => permissions.add(p));
    enumValues(ProjectPermissionEnum).forEach((p) => permissions.add(p));
    enumValues(BoardPermissionEnum).forEach((p) => permissions.add(p));

    await prisma.permission.createMany({
        data: Array.from(permissions).map((permission) => ({ permission })),
        skipDuplicates: true,
    });
}

async function seedRolePermissions() {
    // Define default mapping from roles to permissions
    const rolePermissions: Record<RolesEnum, string[]> = {
        [RolesEnum.USER]: [
            // ProjectPermissionEnum.CREATE_PROJECT,
            ProjectPermissionEnum.GET_PROJECT,
        ],
        [RolesEnum.PROJECT_ADMIN]: enumValues(ProjectPermissionEnum),
        [RolesEnum.BOARD_ADMIN]: enumValues(BoardPermissionEnum),
    };

    for (const [roleName, perms] of Object.entries(rolePermissions) as [RolesEnum, string[]][]) {
        const role = await prisma.roles.findFirst({ where: { roleName, deletedAt: null } });
        if (!role) continue;

        const permissions = await prisma.permission.findMany({
            where: { permission: { in: perms }, deletedAt: null },
            select: { id: true, permission: true },
        });

        // Existing role-permissions to compare
        const existing = await prisma.rolePermission.findMany({
            where: { roleId: role.id, deletedAt: null },
            select: { permissionId: true },
        });
        const existingSet = new Set(existing.map((rp) => rp.permissionId));
        const desiredSet = new Set(permissions.map((p) => p.id));

        const toCreate = permissions
            .filter((p) => !existingSet.has(p.id))
            .map((p) => ({ roleId: role.id, permissionId: p.id }));

        if (toCreate.length > 0) {
            await prisma.rolePermission.createMany({ data: toCreate });
        }

        // Remove obsolete role-permissions that are no longer desired
        const toDelete = Array.from(existingSet).filter((pid) => !desiredSet.has(pid));
        if (toDelete.length > 0) {
            await prisma.rolePermission.deleteMany({
                where: {
                    roleId: role.id,
                    permissionId: { in: toDelete },
                },
            });
        }
    }
}

async function main() {
    await seedRoles();
    await seedPermissions();
    await seedRolePermissions();
}

main()
    .then(() => console.log("✅ Seeded roles, permissions, and role-permissions"))
    .catch((err) => {
        console.error(err);
    })
    .finally(() => prisma.$disconnect());
