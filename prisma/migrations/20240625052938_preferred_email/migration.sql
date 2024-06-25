/*
  Warnings:

  - A unique constraint covering the columns `[preferredEmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "preferredEmail" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_preferredEmail_key" ON "User"("preferredEmail");
