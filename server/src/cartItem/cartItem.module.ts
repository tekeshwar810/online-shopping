import { Module } from "@nestjs/common";
import { CartItemModuleBase } from "./base/cartItem.module.base";
import { CartItemService } from "./cartItem.service";
import { CartItemController } from "./cartItem.controller";
import { CartItemResolver } from "./cartItem.resolver";

@Module({
  imports: [CartItemModuleBase],
  controllers: [CartItemController],
  providers: [CartItemService, CartItemResolver],
  exports: [CartItemService],
})
export class CartItemModule {}
