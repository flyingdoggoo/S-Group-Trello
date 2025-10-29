import { PaginationDto, PaginationSchema, ZodValidationSchema } from "@/common";
import { UserStatusEnum } from "@prisma/client";
import z from "zod";
import { extend } from "zod/v4/core/util.cjs";

export class GetUsersRequestDto {
    name?: string;
    status?: UserStatusEnum;

    constructor(data?: Partial<GetUsersRequestDto>) {
        this.name = data?.name;
        this.status = data?.status;
    }
}

const getUsersRequestQuery = z.object({
    name: z.string().optional(),
    status: z.nativeEnum(UserStatusEnum).optional(),
}).extend(PaginationSchema).strict();

export const GetUsersRequestValidationSchema: ZodValidationSchema = {
    query: getUsersRequestQuery
}

export const GetUsersRequestSchema = {
    query: getUsersRequestQuery
}