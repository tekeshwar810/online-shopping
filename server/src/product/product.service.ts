import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductServiceBase } from "./base/product.service.base";

@Injectable()
export class ProductService extends ProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async getProduct(){
   const product_list = await this.prisma.product.findMany({
      select: {
        id: true,
        categoryid: true,
        createdAt: true,
        image: true,
        price: true,
        productname: true,
        sku: true,
        updatedAt: true,
        attributeid: {
          select: {
            id: true,
            name:true,
            attributeType:true,
            value:true
          },
        },
        brandid: {
          select: {
            id: true,
            brandname: true
          },
        },
      },
      orderBy: {
        id: 'desc'
      }
    })
    return product_list;
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

  async filterProducts(data:any){
    let fillterData = []
    const categoryid = data.categoryid
    const brandidId = data.brandidId

    if(categoryid != undefined && categoryid.trim() != ""){
      let condition = {
        categoryid:{
          array_contains: [categoryid]
        }
      }
      fillterData.push(condition)
    }

    if(brandidId != undefined && brandidId.trim() != ""){
      fillterData.push({ brandidId:brandidId })
    }

    if(data.min != undefined && data.max != undefined){
      fillterData.push({
        price:{ lte: parseFloat(data.max) , gte:parseFloat(data.min) }
      })
    }

    const fillterDataResponse = await this.prisma.product.findMany({
     where:{
      OR:fillterData
     },
      select:{
        productname:true,
        price:true,
        image:true,
        sku:true,
        categoryid:true,
          brandid: {
            select: {
              id: true,
              brandname: true
            },
          },
      },
    })
    return fillterDataResponse
  }
 
}
