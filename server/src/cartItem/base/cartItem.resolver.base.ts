/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCartItemArgs } from "./CreateCartItemArgs";
import { UpdateCartItemArgs } from "./UpdateCartItemArgs";
import { DeleteCartItemArgs } from "./DeleteCartItemArgs";
import { CartItemFindManyArgs } from "./CartItemFindManyArgs";
import { CartItemFindUniqueArgs } from "./CartItemFindUniqueArgs";
import { CartItem } from "./CartItem";
import { Cart } from "../../cart/base/Cart";
import { Product } from "../../product/base/Product";
import { CartItemService } from "../cartItem.service";

@graphql.Resolver(() => CartItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CartItemResolverBase {
  constructor(
    protected readonly service: CartItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "read",
    possession: "any",
  })
  async _cartItemsMeta(
    @graphql.Args() args: CartItemFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CartItem])
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "read",
    possession: "any",
  })
  async cartItems(
    @graphql.Args() args: CartItemFindManyArgs
  ): Promise<CartItem[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CartItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "read",
    possession: "own",
  })
  async cartItem(
    @graphql.Args() args: CartItemFindUniqueArgs
  ): Promise<CartItem | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CartItem)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "create",
    possession: "any",
  })
  async createCartItem(
    @graphql.Args() args: CreateCartItemArgs
  ): Promise<CartItem> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        cartid: args.data.cartid
          ? {
              connect: args.data.cartid,
            }
          : undefined,

        productid: args.data.productid
          ? {
              connect: args.data.productid,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CartItem)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "update",
    possession: "any",
  })
  async updateCartItem(
    @graphql.Args() args: UpdateCartItemArgs
  ): Promise<CartItem | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          cartid: args.data.cartid
            ? {
                connect: args.data.cartid,
              }
            : undefined,

          productid: args.data.productid
            ? {
                connect: args.data.productid,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CartItem)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "delete",
    possession: "any",
  })
  async deleteCartItem(
    @graphql.Args() args: DeleteCartItemArgs
  ): Promise<CartItem | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Cart, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Cart",
    action: "read",
    possession: "any",
  })
  async cartid(@graphql.Parent() parent: CartItem): Promise<Cart | null> {
    const result = await this.service.getCartid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Product, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async productid(@graphql.Parent() parent: CartItem): Promise<Product | null> {
    const result = await this.service.getProductid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
