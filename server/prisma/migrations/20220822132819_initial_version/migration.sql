/*
  Warnings:

  - You are about to drop the `_CartItemToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CartItemToProduct" DROP CONSTRAINT "_CartItemToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_CartItemToProduct" DROP CONSTRAINT "_CartItemToProduct_B_fkey";

-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "productidId" TEXT;

-- DropTable
DROP TABLE "_CartItemToProduct";

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productidId_fkey" FOREIGN KEY ("productidId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
