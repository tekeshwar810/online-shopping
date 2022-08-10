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
import { CreateOrderItemArgs } from "./CreateOrderItemArgs";
import { UpdateOrderItemArgs } from "./UpdateOrderItemArgs";
import { DeleteOrderItemArgs } from "./DeleteOrderItemArgs";
import { OrderItemFindManyArgs } from "./OrderItemFindManyArgs";
import { OrderItemFindUniqueArgs } from "./OrderItemFindUniqueArgs";
import { OrderItem } from "./OrderItem";
import { Order } from "../../order/base/Order";
import { Product } from "../../product/base/Product";
import { OrderItemService } from "../orderItem.service";

@graphql.Resolver(() => OrderItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrderItemResolverBase {
  constructor(
    protected readonly service: OrderItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async _orderItemsMeta(
    @graphql.Args() args: OrderItemFindManyArgs
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
  @graphql.Query(() => [OrderItem])
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async orderItems(
    @graphql.Args() args: OrderItemFindManyArgs
  ): Promise<OrderItem[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => OrderItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "own",
  })
  async orderItem(
    @graphql.Args() args: OrderItemFindUniqueArgs
  ): Promise<OrderItem | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => OrderItem)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "create",
    possession: "any",
  })
  async createOrderItem(
    @graphql.Args() args: CreateOrderItemArgs
  ): Promise<OrderItem> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        orderid: args.data.orderid
          ? {
              connect: args.data.orderid,
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
  @graphql.Mutation(() => OrderItem)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async updateOrderItem(
    @graphql.Args() args: UpdateOrderItemArgs
  ): Promise<OrderItem | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          orderid: args.data.orderid
            ? {
                connect: args.data.orderid,
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

  @graphql.Mutation(() => OrderItem)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "delete",
    possession: "any",
  })
  async deleteOrderItem(
    @graphql.Args() args: DeleteOrderItemArgs
  ): Promise<OrderItem | null> {
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
  @graphql.ResolveField(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async orderid(@graphql.Parent() parent: OrderItem): Promise<Order | null> {
    const result = await this.service.getOrderid(parent.id);

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
  async productid(
    @graphql.Parent() parent: OrderItem
  ): Promise<Product | null> {
    const result = await this.service.getProductid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
