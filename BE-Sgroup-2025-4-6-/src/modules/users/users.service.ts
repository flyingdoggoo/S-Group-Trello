import { HttpResponseBodySuccessDto, PaginationDto, PaginationUtils } from "@/common";
import { UsersRepository } from "./users.repository";
import { GetUsersRequestDto, GetUsersResponseDto, CreateProjectRequestDto } from "./dtos";


export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository = new UsersRepository(),
    ) { }

    async getUsers(getUsersRequest: GetUsersRequestDto, pagination: PaginationDto): Promise<HttpResponseBodySuccessDto<GetUsersResponseDto[]>> {
        const { name, status } = getUsersRequest;
        const paginationUtils = new PaginationUtils().extractSkipTakeFromPagination(pagination);
        const [users, totalUsers] = await this.usersRepository.findUsers({ name: name, status: status, skip: 1, take: 10 });

        const userResponse = users.map(item => new GetUsersResponseDto(item));
        return {
            success: true,
            data: userResponse,
            pagination: paginationUtils.convertPaginationResponseDtoFromTotalRecords(totalUsers),
        }
    }
    async createProject(createProjectRequest: CreateProjectRequestDto): Promise<HttpResponseBodySuccessDto<CreateProjectRequestDto>> {
        const createdProject = await this.usersRepository.createProject(createProjectRequest);
        return {
            success: true,
            data: createdProject
        };
    }
}