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
        // Create project
        const project = await this.projectsRepository.createProject({
            title: dto.title,
            description: dto.description,
        });
        const projectId = project.id;

        // Fetch PROJECT_ADMIN role; if missing fall back to USER role
        const projectAdminRole = await this.rolesRepository.findByName('PROJECT_ADMIN');
        let roleIdForCreator: string | undefined = projectAdminRole?.id;
        if (!roleIdForCreator) {
            const userRole = await this.rolesRepository.findByName('USER');
            roleIdForCreator = userRole?.id;
        }
        if (!roleIdForCreator) {
            // Roles not seeded properly
            console.error('[CREATE PROJECT] Missing roles: PROJECT_ADMIN and USER');
            throw new NotFoundException('Roles not seeded');
        }

        // Assign membership (creator becomes project admin if available)
        try {
            await this.projectMemberRepository.assignUserRoleProject(projectId, userId, roleIdForCreator);
            console.log('[CREATE PROJECT] Membership inserted', { projectId, userId, roleIdForCreator });
        } catch (e) {
            console.error('[CREATE PROJECT] Failed to insert membership', e);
            throw e;
        }

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
