/*
  Warnings:

  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_userId_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_orderId_fkey";

-- CreateTable
CREATE TABLE "products" (
"id" SERIAL,
    "pid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "stock" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "orderId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
"id" SERIAL,
    "oid" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT E'RECIEVED',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "order";

-- DropTable
DROP TABLE "product";

-- CreateIndex
CREATE UNIQUE INDEX "products.pid_unique" ON "products"("pid");

-- CreateIndex
CREATE UNIQUE INDEX "orders.oid_unique" ON "orders"("oid");

-- AddForeignKey
ALTER TABLE "products" ADD FOREIGN KEY("orderId")REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD FOREIGN KEY("userId")REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
