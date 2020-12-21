-- AlterTable
ALTER TABLE "products" ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT,
ALTER COLUMN "email" DROP NOT NULL;
