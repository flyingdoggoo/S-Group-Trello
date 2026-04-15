-- CreateEnum
CREATE TYPE "NotificationTypeEnum" AS ENUM ('INVITATION_SENT', 'INVITATION_ACCEPTED', 'INVITATION_REJECTED');

-- AlterTable
ALTER TABLE "projects" ADD COLUMN "slug" TEXT;
ALTER TABLE "boards" ADD COLUMN "slug" TEXT;

-- Backfill deterministic slugs for existing data
UPDATE "projects"
SET "slug" = CONCAT(
    LEFT(COALESCE(NULLIF(TRIM(BOTH '-' FROM REGEXP_REPLACE(LOWER("title"), '[^a-z0-9]+', '-', 'g')), ''), 'project'), 80),
    '-',
    SUBSTRING("id" FROM 1 FOR 8)
)
WHERE "slug" IS NULL;

UPDATE "boards"
SET "slug" = CONCAT(
    LEFT(COALESCE(NULLIF(TRIM(BOTH '-' FROM REGEXP_REPLACE(LOWER("title"), '[^a-z0-9]+', '-', 'g')), ''), 'board'), 80),
    '-',
    SUBSTRING("id" FROM 1 FOR 8)
)
WHERE "slug" IS NULL;

-- Enforce required columns after backfill
ALTER TABLE "projects" ALTER COLUMN "slug" SET NOT NULL;
ALTER TABLE "boards" ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "projects_slug_key" ON "projects"("slug");
CREATE UNIQUE INDEX "boards_slug_key" ON "boards"("slug");

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "actor_id" TEXT,
    "invitation_id" TEXT,
    "type" "NotificationTypeEnum" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "read_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "notifications_user_id_is_read_created_at_idx" ON "notifications"("user_id", "is_read", "created_at");

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_invitation_id_fkey" FOREIGN KEY ("invitation_id") REFERENCES "Invitations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
