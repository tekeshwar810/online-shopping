import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CartServiceBase } from "./base/cart.service.base";

@Injectable()
export class CartService extends CartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  async getProduct(data:any){
    const product:any = await this.prisma.product.findFirst({
      where:{ id:data.productId },
      select:{ id:true, price:true, }
    })
    return product;
  }

  async checkCartItem(data:any){
    const item:any = await this.prisma.cartItem.findFirst({
      where:{

      }
    })
  }

  async addtoCart (data:any){
    const condition = [{userid:data.userId},{active:true}]   
    const cart = await this.prisma.cart.findFirst({
      where:{ OR: condition }
    })
    if(!cart){
      const productDetail:any = this.getProduct(data)
      if(productDetail){
          const addtoCart:any = await this.prisma.cart.create({
            data:{ userid:data.userId, totalItem:data.quantity, totalprice:productDetail.price }
          })
      if(addtoCart){
          const cartItem = await this.prisma.cartItem.create({
            data:{ cartid:addtoCart.id, productid:data.productId ,productprice:productDetail.price, quantity:productDetail.quantity }
          })
          return { success:true, msg:"product add to cart successfully" }
      }
      }
    }else{

    }

  }
}
