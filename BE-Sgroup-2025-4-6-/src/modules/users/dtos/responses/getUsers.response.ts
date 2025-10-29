import { users } from "@/models"
import { UserStatusEnum } from "@prisma/client"

export class GetUsersResponseDto {
    id: string
    email: string
    name: string | null | undefined
    avatar: string | null | undefined
    updatedAt: Date | null | undefined
    deletedAt: Date | null | undefined
    status: UserStatusEnum

    constructor(userInformation: users) {
        this.id = userInformation.id
        this.email = userInformation.email
        this.name = userInformation.name
        this.avatar = userInformation.avatar
        this.updatedAt = userInformation.updatedAt
        this.deletedAt = userInformation.deletedAt
        this.status = userInformation.status
    }
}