import { Exception } from '@/common/exceptions/base.exception';
import { Request, Response } from 'express';

import { InvitationService } from './invitation.service';

export class InvitationController {
	constructor(private readonly invitationService = new InvitationService()) {}
	async inviteUserToProject(req: Request, res: Response, next: Function) {
		try {
			const { id } = req.params;
			const { email, roleId } = req.body;
			const inviterId = req.user?.id as string;
			const result = await this.invitationService.inviteUserToProject(
				id,
				inviterId,
				email,
				roleId,
			);
			res.status(result.code).json({
				success: result.success,
				message: result.message,
				data: result.data,
			});
		} catch (error) {
			next(error);
		}
	}

	async inviteUserToBoard(req: Request, res: Response, next: Function) {
		try {
			const { id } = req.params;
			const { email, roleId } = req.body;
			const inviterId = req.user?.id as string;
			const result = await this.invitationService.inviteUserToBoard(
				id,
				inviterId,
				email,
				roleId,
			);
			res.status(result.code).json({
				success: result.success,
				message: result.message,
				data: result.data,
			});
		} catch (error) {
			next(error);
		}
	}

	async acceptInvitation(req: Request, res: Response, next: Function) {
		try {
			const { token } = req.params;
			const userId = req.user?.id as string;
			const result = await this.invitationService.acceptInvitation(token, userId);
			res.status(result.code).json({
				success: result.success,
				message: result.message,
				data: result.data,
			});
		} catch (error) {
			next(error);
		}
	}

	async rejectInvitation(req: Request, res: Response, next: Function) {
		try {
			const { token } = req.params;
			const userId = req.user?.id as string;
			const result = await this.invitationService.rejectInvitation(token, userId);
			res.status(result.code).json({
				success: result.success,
				message: result.message,
				data: result.data,
			});
		} catch (error) {
			next(error);
		}
	}

	async getInvitationInfo(req: Request, res: Response, next: Function) {
		try {
			const { token } = req.params;
			const result = await this.invitationService.getInvitationInfo(token);
			res.status(result.code).json({
				success: result.success,
				message: result.message,
				data: result.data,
			});
		} catch (error) {
			next(error);
		}
	}
}
