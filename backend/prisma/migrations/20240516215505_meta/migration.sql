/*
  Warnings:

  - A unique constraint covering the columns `[metaTitle]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `metaDescription` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metaTitle` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "metaDescription" TEXT NOT NULL,
ADD COLUMN     "metaTitle" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_metaTitle_key" ON "Post"("metaTitle");
