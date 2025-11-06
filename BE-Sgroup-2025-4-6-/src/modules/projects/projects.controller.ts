import { Request, Response, NextFunction } from 'express';
import { ProjectsService } from './projects.service';
import { autoBindUtil } from '@/common/utils';
import { CreateProjectRequestDto, UpdateProjectRequestDto, GetProjectsRequestDto } from './dtos';

export class ProjectsController {
    constructor(
        private readonly projectsService = new ProjectsService()
    ) {
        autoBindUtil(this);
    }

    async createProject(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = new CreateProjectRequestDto(req.body);
            const userId = req.user?.id as string; 
            const result = await this.projectsService.createProject(dto, userId);
            
            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            next(error);
        }
    }

    async getProjects(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('=== GET PROJECTS CONTROLLER ===');
            console.log('Query params:', req.query);
            const dto = new GetProjectsRequestDto(req.query);
            console.log('DTO created:', dto);
            const userId = req.user?.id as string;
            const result = await this.projectsService.getProjects(dto, userId);
            console.log('Service result:', result);
            
            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            console.log('ERROR in getProjects:', error);
            next(error);
        }
    }

    async getProjectById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const userId = req.user?.id as string;
            const result = await this.projectsService.getProjectById(id, userId);
            
            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            next(error);
        }
    }

    async updateProject(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const dto = new UpdateProjectRequestDto(req.body);
            const userId = req.user?.id as string;
            const result = await this.projectsService.updateProject(id, dto, userId);
            
            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteProject(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const userId = req.user?.id as string;
            const result = await this.projectsService.deleteProject(id, userId);
            
            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            next(error);
        }
    }

    async archiveProject(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const userId = req.user?.id as string;
            const result = await this.projectsService.archiveProject(id, userId);
            
            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            next(error);
        }
    }
}
