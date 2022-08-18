import { Injectable } from "@nestjs/common";
import { Category } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
import { promises } from "winston-daily-rotate-file";
import { CategoryServiceBase } from "./base/category.service.base";

@Injectable()
export class CategoryService extends CategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async getCategoryList() {
    let categoryAry: { id: string; category_name: string | null; child_categories: { id: string; categoryname: string | null; }[]; }[] = []
    const category = await this.prisma.category.findMany({
      where: {
        parentid: null
      },
      select: {
        id: true,
        categoryname: true,
      }
    })
    await Promise.all(category.map(async (ele) => {
      const childCategory = await this.prisma.category.findMany({
        where: {
          parentid: ele.id
        },
        select: {
          id: true,
          categoryname: true
        }
      })
      categoryAry.push({
        id: ele.id,
        category_name: ele.categoryname,
        child_categories: childCategory
      })
    }))

    return categoryAry
  }
}
