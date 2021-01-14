-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_userId_fkey";

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "orders" ADD FOREIGN KEY("userId")REFERENCES "users"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
