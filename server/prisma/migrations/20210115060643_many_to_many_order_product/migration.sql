/*
  Warnings:

  - You are about to drop the column `orderId` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_orderId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "orderId";

-- CreateTable
CREATE TABLE "_OrderToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrderToProduct_AB_unique" ON "_OrderToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderToProduct_B_index" ON "_OrderToProduct"("B");

-- AddForeignKey
ALTER TABLE "_OrderToProduct" ADD FOREIGN KEY("A")REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToProduct" ADD FOREIGN KEY("B")REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
