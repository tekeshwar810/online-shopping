import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderService } from "./order.service";
import { OrderControllerBase } from "./base/order.controller.base";
import { Order } from "./base/Order";
import * as errors from "../errors";
import { createOrderInput } from "./OrderCreatesInput";
import { OrderCreateInput } from "./base/OrderCreateInput";
import { CartWhereUniqueInput } from "src/cart/base/CartWhereUniqueInput";


@swagger.ApiTags("orders")
@common.Controller("orders")
export class OrderController extends OrderControllerBase {
  constructor(
    protected readonly service: OrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  
  @common.Get("/getOrderByCustomerId/:id")
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async getCartItem(@common.Param() params: CartWhereUniqueInput):Promise<any>{
    const orderList = await this.service.orderList(params)
    return orderList
  }

  @common.Post("/createOrder")
  // @UseGuards(AuthGuard('jwt'),new RoleGuard('admin'))
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "create",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async addToCart(@common.Body() data: createOrderInput):Promise<any>{
    const order = await this.service.createOrder(data)
    return order
}
}
