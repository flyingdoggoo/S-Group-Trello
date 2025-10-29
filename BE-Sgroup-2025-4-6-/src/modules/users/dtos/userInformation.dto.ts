import { UserStatusEnum } from "@prisma/client";

export class UserInformationDto {
	id: string;
	userId: string;
	email: string;
	name: string;
	avatar: string;
	verify: boolean;
	status: UserStatusEnum;

	// constructor(user: UsersEntity) {
	// 	this.id = user.id;
	// 	this.name = user.name;
	// 	this.role = user.role;
	// 	this.email = user.email;
	// 	this.address = user.address;
	// 	this.phoneNumber = user.phoneNumber;
	// 	this.avatar = user.avatar;
	// 	this.bio = user.bio;
	// 	this.gender = user.gender;
	// 	this.dob = user.dob;
	// 	this.balance = user.balance;
	// }

	// static constructorFromAccount(account: AccountsEntity): UserInformationDto {
	// 	const user: UsersEntity = {
	// 		...account.user,
	// 	};
	// 	return new UserInformationDto(user);
	// }

	// getUserInformation(): UserInformationDto {
	// 	return {
	// 		id: this.id,
	// 		name: this.name,
	// 		role: this.role,
	// 		email: this.email,
	// 		address: this.address,
	// 		phoneNumber: this.phoneNumber,
	// 		avatar: this.avatar,
	// 		bio: this.bio,
	// 		gender: this.gender,
	// 		dob: this.dob,
	// 		balance: this.balance,
	// 	} as UserInformationDto;
	// }
}
