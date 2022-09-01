import { Module } from "@nestjs/common";
import { OrderModuleBase } from "./base/order.module.base";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { OrderResolver } from "./order.resolver";
import { CartService } from "src/cart/cart.service";

@Module({
  imports: [OrderModuleBase],
  controllers: [OrderController],
  providers: [OrderService,CartService, OrderResolver],
  exports: [OrderService],
})
export class OrderModule {}
