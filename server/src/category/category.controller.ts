import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CategoryService } from "./category.service";
import { CategoryControllerBase } from "./base/category.controller.base";

import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { Category } from "./base/Category";
import * as errors from "../errors";
import { RoleGuard } from "../role.guard";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


@swagger.ApiTags("categories")
@common.Controller("categories")
export class CategoryController extends CategoryControllerBase {  
  constructor(
    protected readonly service: CategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Get("/getAllCategory")
  @UseGuards(AuthGuard('jwt'),new RoleGuard('admin'))
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async getAllCategory(): Promise<object> {
    const categoryList = await this.service.getCategoryList();
    return categoryList;
  }
}
