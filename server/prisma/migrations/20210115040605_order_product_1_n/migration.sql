/*
  Warnings:

  - You are about to drop the column `productIds` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "productIds";

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "orderId" TEXT;

-- AddForeignKey
ALTER TABLE "products" ADD FOREIGN KEY("orderId")REFERENCES "orders"("oid") ON DELETE SET NULL ON UPDATE CASCADE;
