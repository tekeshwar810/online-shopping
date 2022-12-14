/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CartItemService } from "../cartItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CartItemCreateInput } from "./CartItemCreateInput";
import { CartItemWhereInput } from "./CartItemWhereInput";
import { CartItemWhereUniqueInput } from "./CartItemWhereUniqueInput";
import { CartItemFindManyArgs } from "./CartItemFindManyArgs";
import { CartItemUpdateInput } from "./CartItemUpdateInput";
import { CartItem } from "./CartItem";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CartItemControllerBase {
  constructor(
    protected readonly service: CartItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CartItem })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: CartItemCreateInput): Promise<CartItem> {
    return await this.service.create({
      data: {
        ...data,

        cartid: data.cartid
          ? {
              connect: data.cartid,
            }
          : undefined,

        productid: data.productid
          ? {
              connect: data.productid,
            }
          : undefined,
      },
      select: {
        cartid: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        productid: {
          select: {
            id: true,
          },
        },

        productprice: true,
        quantity: true,
        updatedAt: true,
        userid: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [CartItem] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(CartItemFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<CartItem[]> {
    const args = plainToClass(CartItemFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        cartid: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        productid: {
          select: {
            id: true,
          },
        },

        productprice: true,
        quantity: true,
        updatedAt: true,
        userid: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CartItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CartItemWhereUniqueInput
  ): Promise<CartItem | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        cartid: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        productid: {
          select: {
            id: true,
          },
        },

        productprice: true,
        quantity: true,
        updatedAt: true,
        userid: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CartItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CartItemWhereUniqueInput,
    @common.Body() data: CartItemUpdateInput
  ): Promise<CartItem | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          cartid: data.cartid
            ? {
                connect: data.cartid,
              }
            : undefined,

          productid: data.productid
            ? {
                connect: data.productid,
              }
            : undefined,
        },
        select: {
          cartid: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          productid: {
            select: {
              id: true,
            },
          },

          productprice: true,
          quantity: true,
          updatedAt: true,
          userid: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "CartItem",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CartItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CartItemWhereUniqueInput
  ): Promise<CartItem | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          cartid: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          productid: {
            select: {
              id: true,
            },
          },

          productprice: true,
          quantity: true,
          updatedAt: true,
          userid: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
