/*
  Warnings:

  - You are about to drop the column `productprice` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `attributeidId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `_CartToProduct` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `categoryid` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_CartToProduct" DROP CONSTRAINT "_CartToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_CartToProduct" DROP CONSTRAINT "_CartToProduct_B_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_attributeidId_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "productprice",
DROP COLUMN "quantity",
ADD COLUMN     "active" BOOLEAN,
ADD COLUMN     "totalItem" INTEGER,
ADD COLUMN     "totalprice" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "attributeidId",
ADD COLUMN     "attributeIdId" TEXT,
ALTER COLUMN "categoryid" SET NOT NULL;

-- DropTable
DROP TABLE "_CartToProduct";

-- CreateTable
CREATE TABLE "CartItem" (
    "cartidId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "productprice" DOUBLE PRECISION,
    "quantity" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userid" TEXT,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CartItemToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CartItemToProduct_AB_unique" ON "_CartItemToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CartItemToProduct_B_index" ON "_CartItemToProduct"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_attributeIdId_fkey" FOREIGN KEY ("attributeIdId") REFERENCES "Attribute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartidId_fkey" FOREIGN KEY ("cartidId") REFERENCES "Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartItemToProduct" ADD CONSTRAINT "_CartItemToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "CartItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartItemToProduct" ADD CONSTRAINT "_CartItemToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
