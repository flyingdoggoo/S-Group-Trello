import { Request } from 'express';
import { HttpResponseDto, PaginationDto } from "@/common";
import { UsersService } from "./users.service";
import { Exception } from '@tsed/exceptions';
import { RegisterResponseDto } from '../auth/dtos';
import { GetUsersRequestDto, GetUsersResponseDto } from './dtos';
import { ResponseConfig } from '@asteasolutions/zod-to-openapi';
import { ReferenceObject } from '@asteasolutions/zod-to-openapi/dist/types';
import { ZodObject, ZodOptional, ZodString } from 'zod';
import { $strip } from 'zod/v4/core';
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

    async createProject(req: Request) {
        const createProjectRequest: CreateProjectRequestDto = new CreateProjectRequestDto(req.body);
        const result = await this.usersService.createProject(createProjectRequest);
        if (result instanceof Exception) {
            return new HttpResponseDto().exception(result);
        }
        return new HttpResponseDto().created<CreateProjectRequestDto>(result);
    }
    async updateUser() { }
    async deleteUser() { }
    async getUser() { }
}