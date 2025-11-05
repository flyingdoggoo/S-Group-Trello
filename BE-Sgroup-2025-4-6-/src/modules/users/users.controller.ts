import { Request } from 'express';
import { HttpResponseDto, PaginationDto } from "@/common";
import { UsersService } from "./users.service";
import { Exception } from '@tsed/exceptions';
import { RegisterResponseDto } from '../auth/dtos';
import { GetUsersRequestDto, GetUsersResponseDto } from './dtos';
import { CreateProjectRequestDto } from './dtos/requests/createProject.request';

export class UsersController {
    constructor(
        private readonly usersService: UsersService = new UsersService(),
    ) { }

    async getUsers(req: Request) {
        const getUsersRequest: GetUsersRequestDto = new GetUsersRequestDto(req.query);
        const pagination: PaginationDto = new PaginationDto(req.query);

        const result = await this.usersService.getUsers(getUsersRequest, pagination);
        if (result instanceof Exception) {
            return new HttpResponseDto().exception(result);
        }
        return new HttpResponseDto().created<GetUsersResponseDto[]>(result);
    }
    async updateUser() { }
    async deleteUser() { }
    async getUser() { }
}