import z from "zod";
import { ZodValidationSchema } from "@/common";
import { ProjectStatusEnum } from "@prisma/client";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export class GetProjectsRequestDto {
    title?: string;
    status?: ProjectStatusEnum;
    page?: number;
    limit?: number;

    constructor(data?: Partial<GetProjectsRequestDto> | any) {
        this.title = data?.title;
        this.status = data?.status;
        // Convert string to number for query params
        this.page = data?.page ? parseInt(data.page as string, 10) : 1;
        this.limit = data?.limit ? parseInt(data.limit as string, 10) : 10;
    }
}

const getProjectsRequestQuery = z.object({
    title: z.string().optional().openapi({ example: 'My Project' }),
    status: z.nativeEnum(ProjectStatusEnum).optional().openapi({ example: ProjectStatusEnum.active }),
    page: z.coerce.number().int().positive().optional().default(1).openapi({ example: 1 }),
    limit: z.coerce.number().int().positive().optional().default(10).openapi({ example: 10 }),
}).strict();

export const GetProjectsRequestValidationSchema: ZodValidationSchema = {
    query: getProjectsRequestQuery
}

export const GetProjectsRequestSchema = {
    query: getProjectsRequestQuery
}
