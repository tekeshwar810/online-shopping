import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RoleGuard } from "src/role.guard";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { User } from "./base/User";
import * as errors from "../errors";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController extends UserControllerBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Get("/getAllUsers")
  @UseGuards(AuthGuard('jwt'),new RoleGuard('admin'))
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async getAllCategory(): Promise<object> {
    const users = await this.service.getAllUsers();
    return users;
  }
}
