import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CategoryServiceBase } from "./base/category.service.base";

@Injectable()
export class CategoryService extends CategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async getCategoryList() {
    const category = await this.prisma.category.findMany({
      where:{
        parentid:null
      },
      select:{
        id:true,
        categoryname:true,
      }
    })
    return category
  }
}
