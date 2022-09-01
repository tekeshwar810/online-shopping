import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { Cart } from "src/cart/base/Cart";
import { OrderServiceBase } from "./base/order.service.base";
import { CartService } from "src/cart/cart.service"
@Injectable()
export class OrderService extends OrderServiceBase {
  constructor(protected readonly prisma: PrismaService,protected readonly CartService: CartService) {
    super(prisma);
  }
async orderList(params: any) {
 let orderIds:any =  await this.prisma.order.findMany({
    where:{ useridId:params.id },
    select:{ id:true }
  })
    
  let IdsAry:any = orderIds.reduce((pre:any,curr:any)=>[...pre,curr.id],[])
  
  let orderItem = await this.prisma.orderItem.findMany({
    where:{
      orderidId:{in:IdsAry}
    },
    select:{
      id:true,
      quantity:true,
      productprice:true,
      productid:{
        select:{
          productname:true,
          image:true,
          price:true,
          brandid:{
            select:{
              brandname:true
            }
          }
        }
      }
    }
  })
  return orderItem
}

async createOrder(data: any) {
  let cartInfo:any =  await this.CartService.getCartItems(data)
  console.log(cartInfo.data.cartitems,cartInfo.data)
  let orderCreate:any = await this.prisma.order.create({
    data:{
      totalprice: cartInfo.data.totalprice,
      useridId:data.userId,
      // totalquantity: cartInfo.data.totalItem
    }
   })
   if(orderCreate){
      let cart_item = cartInfo.data.cartitems
      let cartAry: any[] = []
      console.log(orderCreate,'order create')
      await Promise.all(cart_item.map(async (item:any) =>{
        let order_item:any = {}
        order_item.orderidId = orderCreate.id
        order_item.productidId = item.productid.id
        order_item.productprice = (item.quantity*item.productid.price)
        order_item.quantity = item.quantity
        cartAry.push(order_item) 
      }))
      console.log(cartInfo,'cartid',cartInfo.id )
      let orderItem = await this.prisma.orderItem.createMany({data:cartAry})
      let updateCartStatus = await this.prisma.cart.update({
        where:{ id:cartInfo.data.id },
        data:{ active:false }
      })
      return { success: true, msg: "order create successfully" }
   }
}
}
