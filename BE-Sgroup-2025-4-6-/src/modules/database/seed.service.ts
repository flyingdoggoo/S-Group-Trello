import { PermissionForAdmin } from "@/common/enums";
import { PrismaService } from "./prisma.service"
import { describe } from "node:test";
export class SeedService {
    constructor(private readonly prismaService = new PrismaService()) {}

    async seedRoles() {
        const permissions: string[] = Object.values(PermissionForAdmin);
        const existingPermissions = await this.prismaService.permission.findMany();
        const existingPermissionNames = existingPermissions.map(permission => permission.permission);

        const newPermissions = permissions.filter(permission => !existingPermissionNames.includes(permission));
        if (newPermissions.length === 0) {
            return;
        }
        //replace dấu cách thành dấu gạch dưới
        const permissionData = newPermissions.map(permission => ({ permission: permission, }));
        await this.prismaService.permission.createMany({
            data: permissionData,
            skipDuplicates: true,
        });
    }
}