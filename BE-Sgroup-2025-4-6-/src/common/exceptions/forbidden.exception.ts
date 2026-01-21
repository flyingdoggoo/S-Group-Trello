import { ClientException } from './base.exception';
import { StatusCodes } from 'http-status-codes';

export class ForbiddenException extends ClientException {
	constructor() {
		super(
			StatusCodes.FORBIDDEN,
			'The user does not have permission to make changes to this resource',
		);
	}
}
