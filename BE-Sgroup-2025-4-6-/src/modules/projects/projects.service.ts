import { ProjectsRepository } from './projects.repository';
import { CreateProjectRequestDto, UpdateProjectRequestDto, GetProjectsRequestDto } from './dtos';
import { ProjectResponseDto, GetProjectsResponseDto } from './dtos';
import { NotFoundException, ConflictException, ForbiddenException } from '@/common/exceptions';
import { ServiceResponse, ResponseStatus } from '@/common/dtos';
import { StatusCodes } from 'http-status-codes';
import { RolesRepository } from '../roles/roles.repository';
import { ProjectMembersRepository } from '../projectMembers/projectMembers.repository';
export class ProjectsService {
    constructor(
        private readonly projectsRepository = new ProjectsRepository(),
        private readonly rolesRepository = new RolesRepository(),
        private readonly projectMemberRepository = new ProjectMembersRepository()
    ) { }

    async createProject(dto: CreateProjectRequestDto, userId: string): Promise<ServiceResponse<ProjectResponseDto>> {
        const project = await this.projectsRepository.createProject({
            title: dto.title,
            description: dto.description,
        });
        const project_id = project.id;
        // Determine user's global role id
        let userGlobalRoleId = await this.rolesRepository.findRoleIdByUserId(userId);
        // If user has no global role, default to USER
        if (!userGlobalRoleId) {
            const userRole = await this.rolesRepository.findByName('USER');
            userGlobalRoleId = userRole?.id as string;
        }

        // Always make the creator a PROJECT_ADMIN within this project (membership role)
        let roleIdForProjectMember = userGlobalRoleId;
        const projectAdmin = await this.rolesRepository.findByName('PROJECT_ADMIN');
        if (projectAdmin?.id) {
            roleIdForProjectMember = projectAdmin.id;
        }

        await this.projectMemberRepository.assignUserRoleProject(
            project_id, userId, roleIdForProjectMember
        );
        return new ServiceResponse(
            ResponseStatus.Success,
            'Project created successfully',
            new ProjectResponseDto(project),
            StatusCodes.CREATED
        );
    }

    async getProjects(dto: GetProjectsRequestDto, userId: string): Promise<ServiceResponse<GetProjectsResponseDto>> {
        const page = dto.page ?? 1;
        const limit = dto.limit ?? 10;
        const skip = (page - 1) * limit;

        const [projects, total] = await this.projectsRepository.findProjects({
            userId,
            title: dto.title,
            status: dto.status,
            skip,
            take: limit,
        });

        const projectsResponse = projects.map(project => new ProjectResponseDto(project));

        return new ServiceResponse(
            ResponseStatus.Success,
            'Projects retrieved successfully',
            new GetProjectsResponseDto(projectsResponse, total, page, limit),
            StatusCodes.OK
        );
    }

    async getProjectById(id: string, userId: string): Promise<ServiceResponse<ProjectResponseDto>> {
        const project = await this.projectsRepository.findProjectById({ id });

        if (!project) {
            throw new NotFoundException('Project not found');
        }
        const isMember = await this.projectMemberRepository.isUserMemberOfProject(id, userId);
        if (!isMember) {
            throw new ForbiddenException();
        }

        return new ServiceResponse(
            ResponseStatus.Success,
            'Project retrieved successfully',
            new ProjectResponseDto(project),
            StatusCodes.OK
        );
    }

    async updateProject(id: string, dto: UpdateProjectRequestDto, userId: string): Promise<ServiceResponse<ProjectResponseDto>> {
        // Kiểm tra project có tồn tại không
        const existingProject = await this.projectsRepository.findProjectById({ id });

        if (!existingProject) {
            throw new NotFoundException('Project not found');
        }
        const isMember = await this.projectMemberRepository.isUserMemberOfProject(id, userId);
        if (!isMember) {
            throw new ForbiddenException();
        }

        const project = await this.projectsRepository.updateProject({
            id,
            title: dto.title,
            description: dto.description,
        });

        return new ServiceResponse(
            ResponseStatus.Success,
            'Project updated successfully',
            new ProjectResponseDto(project),
            StatusCodes.OK
        );
    }

    async deleteProject(id: string, userId: string): Promise<ServiceResponse<null>> {
        // Kiểm tra project có tồn tại không
        const existingProject = await this.projectsRepository.findProjectById({ id });

        if (!existingProject) {
            throw new NotFoundException('Project not found');
        }
        const isMember = await this.projectMemberRepository.isUserMemberOfProject(id, userId);
        if (!isMember) {
            throw new ForbiddenException();
        }

        await this.projectsRepository.deleteProject({ id });

        return new ServiceResponse(
            ResponseStatus.Success,
            'Project deleted successfully',
            null,
            StatusCodes.OK
        );
    }

    async archiveProject(id: string, userId: string): Promise<ServiceResponse<ProjectResponseDto>> {
        // Kiểm tra project có tồn tại không
        const existingProject = await this.projectsRepository.findProjectById({ id });

        if (!existingProject) {
            throw new NotFoundException('Project not found');
        }
        const isMember = await this.projectMemberRepository.isUserMemberOfProject(id, userId);
        if (!isMember) {
            throw new ForbiddenException();
        }

        const project = await this.projectsRepository.archiveProject({ id });

        return new ServiceResponse(
            ResponseStatus.Success,
            'Project archived successfully',
            new ProjectResponseDto(project),
            StatusCodes.OK
        );
    }
}
