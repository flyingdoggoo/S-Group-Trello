import { HttpResponseBodySuccessDto, PaginationDto, PaginationUtils } from "@/common";
import { NotificationRepository } from "./notification.repository";


export class NotificationService {
    constructor(
        private readonly notificationRepository: NotificationRepository = new         NotificationRepository(),
    ) { }
}