import { Prisma, PrismaService } from '../database';
export class RolesRepository {
    constructor(private readonly prismaService = new PrismaService()) {}
}