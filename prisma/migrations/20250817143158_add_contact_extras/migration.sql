-- CreateEnum
CREATE TYPE "Intent" AS ENUM ('general', 'feedback', 'partnership', 'project', 'other');

-- AlterTable
ALTER TABLE "ContactMessage" ADD COLUMN     "category" TEXT,
ADD COLUMN     "intent" "Intent",
ADD COLUMN     "links" TEXT,
ADD COLUMN     "platform" TEXT,
ALTER COLUMN "name" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "ContactMessage_CreatedAt_idx" ON "ContactMessage"("CreatedAt");

-- CreateIndex
CREATE INDEX "ContactMessage_status_idx" ON "ContactMessage"("status");
