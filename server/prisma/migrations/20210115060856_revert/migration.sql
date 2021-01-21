/*
  Warnings:

  - You are about to drop the `_OrderToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OrderToProduct" DROP CONSTRAINT "_OrderToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderToProduct" DROP CONSTRAINT "_OrderToProduct_B_fkey";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "orderId" TEXT;

-- DropTable
DROP TABLE "_OrderToProduct";

-- AddForeignKey
ALTER TABLE "products" ADD FOREIGN KEY("orderId")REFERENCES "orders"("oid") ON DELETE SET NULL ON UPDATE CASCADE;
