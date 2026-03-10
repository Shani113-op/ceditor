-- CreateEnum
CREATE TYPE "VideoType" AS ENUM ('CLOUDINARY', 'EXTERNAL');

-- AlterTable
ALTER TABLE "Reel" ADD COLUMN     "videoType" "VideoType" NOT NULL DEFAULT 'CLOUDINARY';
