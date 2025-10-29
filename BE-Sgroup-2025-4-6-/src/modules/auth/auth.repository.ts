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
}
