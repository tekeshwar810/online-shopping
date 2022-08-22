/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, CartItem, Cart, Product } from "@prisma/client";

export class CartItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CartItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartItemFindManyArgs>
  ): Promise<number> {
    return this.prisma.cartItem.count(args);
  }

  async findMany<T extends Prisma.CartItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartItemFindManyArgs>
  ): Promise<CartItem[]> {
    return this.prisma.cartItem.findMany(args);
  }
  async findOne<T extends Prisma.CartItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartItemFindUniqueArgs>
  ): Promise<CartItem | null> {
    return this.prisma.cartItem.findUnique(args);
  }
  async create<T extends Prisma.CartItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartItemCreateArgs>
  ): Promise<CartItem> {
    return this.prisma.cartItem.create<T>(args);
  }
  async update<T extends Prisma.CartItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartItemUpdateArgs>
  ): Promise<CartItem> {
    return this.prisma.cartItem.update<T>(args);
  }
  async delete<T extends Prisma.CartItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CartItemDeleteArgs>
  ): Promise<CartItem> {
    return this.prisma.cartItem.delete(args);
  }

  async getCartid(parentId: string): Promise<Cart | null> {
    return this.prisma.cartItem
      .findUnique({
        where: { id: parentId },
      })
      .cartid();
  }

  async getProductid(parentId: string): Promise<Product | null> {
    return this.prisma.cartItem
      .findUnique({
        where: { id: parentId },
      })
      .productid();
  }
}
