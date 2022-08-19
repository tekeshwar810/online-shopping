import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserServiceBase } from "./base/user.service.base";
import { PasswordService } from "../auth/password.service";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {
    super(prisma, passwordService);
  }

  async getAllUsers(){
   const userList =  await this.prisma.user.findMany({
      where:{
        roles: {
          hasEvery:'shopper'
        }
      },
      select:{
        username:true,
        email:true,
        firstName:true,
        lastName:true,
        address:true,
        roles:true
      }
    })  
    return userList;
  }
}
