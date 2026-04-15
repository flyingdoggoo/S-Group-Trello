import { tokens, UserStatusEnum } from '@prisma/client';

import { Prisma, PrismaService } from '../database';

import {
	accountsWithPartialRelations,
	socialAccountsWithPartialRelations,
} from '@/models';

export class AuthRepository {
	constructor(private readonly prismaService = new PrismaService()) {}

	async findAccount({
		email,
		status,
	}: {
		email: string;
		status?: UserStatusEnum;
	}): Promise<accountsWithPartialRelations | null> {
		return this.prismaService.accounts.findFirst({
			include: {
				user: true,
			},
			where: {
				user: {
					email: email,
					status: status,
				},
			},
		});
	}

	async findSocialAccount({
		userId,
		email,
		status,
	}: {
		email: string;
		userId?: string;
		status?: UserStatusEnum;
	}): Promise<socialAccountsWithPartialRelations | null> {
		return this.prismaService.socialAccounts.findFirst({
			include: {
				user: true,
			},
			where: {
				user: {
					email: email,
					id: userId,
					status: status,
				},
			},
		});
	}

	async createAccount({
		accounts,
	}: {
		accounts: Prisma.accountsCreateInput;
	}): Promise<accountsWithPartialRelations> {
		return this.prismaService.accounts.create({
			include: {
				user: true,
			},
			data: accounts,
		});
	}

	async createSocialAccount({
		socialAccount,
	}: {
		socialAccount: Prisma.socialAccountsCreateInput;
	}): Promise<socialAccountsWithPartialRelations> {
		return this.prismaService.socialAccounts.create({
			data: socialAccount,
		});
	}

	async createToken({ token }: { token: Prisma.tokensCreateInput }): Promise<tokens> {
		return this.prismaService.tokens.create({
			data: token,
		});
	}

	async findTokenByRefreshToken(refreshToken: string): Promise<tokens | null> {
		return this.prismaService.tokens.findFirst({
			where: {
				refreshToken,
			},
		});
	}

	async deleteTokenByRefreshToken(refreshToken: string): Promise<number> {
		const result = await this.prismaService.tokens.deleteMany({
			where: {
				refreshToken,
			},
		});

		return result.count;
	}

	async deleteTokensByUserId(userId: string): Promise<number> {
		const result = await this.prismaService.tokens.deleteMany({
			where: {
				userId,
			},
		});

		return result.count;
	}

	async updateAccountPassword(params: {
		userId: string;
		password: string;
		salt: string;
	}): Promise<void> {
		await this.prismaService.accounts.update({
			where: {
				userId: params.userId,
			},
			data: {
				password: params.password,
				salt: params.salt,
			},
		});
	}
}
