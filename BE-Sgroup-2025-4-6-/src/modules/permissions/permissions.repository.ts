import { Prisma, PrismaService } from '../database';
export class PermissionsRepository {
    constructor(private readonly prismaService = new PrismaService()) {}
    async hasPermission(userId: string, permission: string): Promise<boolean> {
        const user = await this.prismaService.users.findFirst({
            where:{
                id: userId,
            }
        })

        if(!user) return false;

        

        return true;
    }
}