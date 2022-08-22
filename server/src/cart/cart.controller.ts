import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CartService } from "./cart.service";
import { CartControllerBase } from "./base/cart.controller.base";
import { Cart } from "./base/Cart";
import { CreateCartArgs } from "./base/CreateCartArgs";
import { CreateCartInput } from "./CreateCartInput";
import * as errors from "../errors";

@swagger.ApiTags("carts")
@common.Controller("carts")
export class CartController extends CartControllerBase {
  constructor(
    protected readonly service: CartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.Post("/addToCart")
  // @UseGuards(AuthGuard('jwt'),new RoleGuard('admin'))
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "create",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Cart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async addToCart(@common.Body() data: CreateCartInput):Promise<Object>{
    const cart =  await this.service.addtoCart(data)
    return {msg:data}
}
}
