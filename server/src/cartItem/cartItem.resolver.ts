import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CartItemResolverBase } from "./base/cartItem.resolver.base";
import { CartItem } from "./base/CartItem";
import { CartItemService } from "./cartItem.service";

@graphql.Resolver(() => CartItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CartItemResolver extends CartItemResolverBase {
  constructor(
    protected readonly service: CartItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
