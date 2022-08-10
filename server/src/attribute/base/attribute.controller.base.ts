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
import { AttributeService } from "../attribute.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AttributeCreateInput } from "./AttributeCreateInput";
import { AttributeWhereInput } from "./AttributeWhereInput";
import { AttributeWhereUniqueInput } from "./AttributeWhereUniqueInput";
import { AttributeFindManyArgs } from "./AttributeFindManyArgs";
import { AttributeUpdateInput } from "./AttributeUpdateInput";
import { Attribute } from "./Attribute";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AttributeControllerBase {
  constructor(
    protected readonly service: AttributeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Attribute })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: AttributeCreateInput): Promise<Attribute> {
    return await this.service.create({
      data: data,
      select: {
        attributeType: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Attribute] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(AttributeFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Attribute[]> {
    const args = plainToClass(AttributeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        attributeType: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Attribute })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: AttributeWhereUniqueInput
  ): Promise<Attribute | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        attributeType: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
        value: true,
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
    resource: "Attribute",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Attribute })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: AttributeWhereUniqueInput,
    @common.Body() data: AttributeUpdateInput
  ): Promise<Attribute | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          attributeType: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
          value: true,
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
    resource: "Attribute",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Attribute })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: AttributeWhereUniqueInput
  ): Promise<Attribute | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          attributeType: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
          value: true,
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
