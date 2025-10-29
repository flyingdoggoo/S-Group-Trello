import { ProjectsRepository } from './projects.repository';
import { CreateProjectRequestDto, UpdateProjectRequestDto, GetProjectsRequestDto } from './dtos';
import { ProjectResponseDto, GetProjectsResponseDto } from './dtos';
import { NotFoundException, ConflictException } from '@/common/exceptions';
import { ServiceResponse, ResponseStatus } from '@/common/dtos';
import { StatusCodes } from 'http-status-codes';

export class ProjectsService {
    constructor(
        private readonly projectsRepository = new ProjectsRepository()
    ) { }

    async createProject(dto: CreateProjectRequestDto): Promise<ServiceResponse<ProjectResponseDto>> {
        const project = await this.projectsRepository.createProject({
            title: dto.title,
            description: dto.description,
        });

        return new ServiceResponse(
            ResponseStatus.Success,
            'Project created successfully',
            new ProjectResponseDto(project),
            StatusCodes.CREATED
        );
    }

    async getProjects(dto: GetProjectsRequestDto): Promise<ServiceResponse<GetProjectsResponseDto>> {
        const page = dto.page ?? 1;
        const limit = dto.limit ?? 10;
        const skip = (page - 1) * limit;

        const [projects, total] = await this.projectsRepository.findProjects({
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

    async getProjectById(id: string): Promise<ServiceResponse<ProjectResponseDto>> {
        const project = await this.projectsRepository.findProjectById({ id });

        if (!project) {
            throw new NotFoundException('Project not found');
        }

        return new ServiceResponse(
            ResponseStatus.Success,
            'Project retrieved successfully',
            new ProjectResponseDto(project),
            StatusCodes.OK
        );
    }

    async updateProject(id: string, dto: UpdateProjectRequestDto): Promise<ServiceResponse<ProjectResponseDto>> {
        // Kiểm tra project có tồn tại không
        const existingProject = await this.projectsRepository.findProjectById({ id });

        if (!existingProject) {
            throw new NotFoundException('Project not found');
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

    async deleteProject(id: string): Promise<ServiceResponse<null>> {
        // Kiểm tra project có tồn tại không
        const existingProject = await this.projectsRepository.findProjectById({ id });

        if (!existingProject) {
            throw new NotFoundException('Project not found');
        }

        await this.projectsRepository.deleteProject({ id });

        return new ServiceResponse(
            ResponseStatus.Success,
            'Project deleted successfully',
            null,
            StatusCodes.OK
        );
    }

    async archiveProject(id: string): Promise<ServiceResponse<ProjectResponseDto>> {
        // Kiểm tra project có tồn tại không
        const existingProject = await this.projectsRepository.findProjectById({ id });

        if (!existingProject) {
            throw new NotFoundException('Project not found');
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
