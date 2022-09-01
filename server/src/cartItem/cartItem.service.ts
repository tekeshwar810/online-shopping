import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CartItemServiceBase } from "./base/cartItem.service.base";
import { CartService } from "src/cart/cart.service";
import { CartServiceBase } from "src/cart/base/cart.service.base";
CartServiceBase
@Injectable()
export class CartItemService extends CartItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  
}
// export class CartService extends CartServiceBase {
//   constructor(protected readonly prisma: PrismaService) {
//     super(prisma);
//   }
  
// }


