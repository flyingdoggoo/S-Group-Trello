import { PrismaService } from '../database';

import { users } from '../../models/modelSchema/usersSchema';
import { Prisma, UserStatusEnum } from '@prisma/client';
export class UsersRepository {
	constructor(private readonly prismaService = new PrismaService()) {}

	async findUsers({
		name,
		status,
		skip,
		take,
	}: {
		name?: string;
		status?: UserStatusEnum;
		skip: number;
		take: number;
	}): Promise<[users[], number]> {
		return Promise.all([
			this.prismaService.users.findMany({
				where: {
					name: name,
					status: status,
				},
				skip: skip,
				take: take,
			}),
			this.prismaService.users.count({
				where: {
					name: name,
					status: status,
				},
			}),
		]);
	}

	async findUser({ email }: { email: string }): Promise<users | null> {
		return this.prismaService.users.findFirst({
			where: { email },
		});
	}

	async updateUser({
		userId,
		user,
	}: {
		userId: string;
		user: Prisma.usersUpdateManyMutationInput;
	}): Promise<users> {
		const { id, ...userData } = user;
		return this.prismaService.users.update({
			where: { id: userId },
			data: userData,
		});
	}
}

// http://localhost:3000/projects POST
// POST http://localhost:3000
