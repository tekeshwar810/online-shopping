import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductServiceBase } from "./base/product.service.base";

@Injectable()
export class ProductService extends ProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async addProduct(data:any,imgPath:string) {
    console.log(data.attributeid)
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
      image:imgPath,
      attributeidId:data.attributeid
     },
     select:{
      productname:true,
     },
     
    })
    return {success:true,msg:'product add successfully'}
  }

  async updateProduct(data:any,image:any,condition:any){
    let imgPath;
    if(image != undefined){
      imgPath = image[0].path
    }
    let category = data.categoryid
    let categoryid = category.split(',')
    const updateProduct = await this.prisma.product.update({
      where:condition,
      data:{
        productname:data.productname,
        price: parseFloat(data.price),
        sku:data.sku,
        brandidId:data.brandid,
        categoryid:categoryid,
        image:imgPath,
        attributeidId:data.attributeid
      }
    })
    if(updateProduct){
      return {success:true,msg:'product update successfully'}
    }else{
      return {success:false,msg:'product not update'}
    }
  }
}
