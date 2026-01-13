-- CreateEnum
CREATE TYPE "InvitationStatusEnum" AS ENUM ('PENDING', 'ACCEPTED', 'EXPIRED', 'CANCELLED');

-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "status" "CardStatusEnum" NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE "lists" ADD COLUMN     "status" "ListStatusEnum" NOT NULL DEFAULT 'active';

-- CreateTable
CREATE TABLE "Invitations" (
    "id" TEXT NOT NULL,
    "project_id" TEXT,
    "board_id" TEXT,
    "email" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "status" "InvitationStatusEnum" NOT NULL DEFAULT 'PENDING',
    "created_by" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "accepted_at" TIMESTAMP(3),

    CONSTRAINT "Invitations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invitations_token_key" ON "Invitations"("token");

-- CreateIndex
CREATE INDEX "Invitations_email_status_idx" ON "Invitations"("email", "status");

-- AddForeignKey
ALTER TABLE "Invitations" ADD CONSTRAINT "Invitations_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitations" ADD CONSTRAINT "Invitations_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitations" ADD CONSTRAINT "Invitations_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "boards"("id") ON DELETE SET NULL ON UPDATE CASCADE;
