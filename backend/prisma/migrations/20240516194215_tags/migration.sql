-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('showsMovies', 'gaming', 'tech', 'books', 'food', 'life', 'travel');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "tags" "Tag"[];
