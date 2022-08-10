import { Module } from "@nestjs/common";
import { CartModuleBase } from "./base/cart.module.base";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { CartResolver } from "./cart.resolver";

@Module({
  imports: [CartModuleBase],
  controllers: [CartController],
  providers: [CartService, CartResolver],
  exports: [CartService],
})
export class CartModule {}
