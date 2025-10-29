import { PrismaService } from "../database/prisma.service";

export class ProjectMembersRepository {
    constructor(private readonly projectMember = new PrismaService()) {}
    
}