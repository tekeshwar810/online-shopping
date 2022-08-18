import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductServiceBase } from "./base/product.service.base";

@Injectable()
export class ProductService extends ProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async addProduct(data:any,imgPath:string) {
    let category = data.categoryid
    let categoryid = category.split(',')
    console.log(data)
    const product = await this.prisma.product.create({
     data:{
      productname:data.productname,
      price: parseFloat(data.price),
      sku:data.sku,
      brandidId:data.brandid,
      categoryid:categoryid,
      image:imgPath
     },
     select:{
      productname:true
     }
    })
    return {success:true,msg:'product add successfully'}
  }
}
