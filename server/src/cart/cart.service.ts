import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CartServiceBase } from "./base/cart.service.base";
@Injectable()
export class CartService extends CartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  async getProduct(data: any) {
    
  const product: any = await this.prisma.product.findFirst({
      where: { id: data.productId },
      select: { id: true, price: true }
    })
    return product;
  }

  async checkCartItem(data: any) {
    const checkItem: any = await this.prisma.cartItem.findFirst({
      where: {
        AND: [
          { userid: data.userId },
          { productidId: data.productId }
        ]
      },
      select: { id: true, quantity: true, cartidId: true }
    })
    return checkItem;
  }

  async addItem(cartId: any, data: any, productDetail: any) {
    const addcartItem = await this.prisma.cartItem.create({
      data: { cartidId: cartId, productidId: data.productId, productprice: (productDetail.price * data.quantity), quantity: data.quantity, userid: data.userId }
    })
    return addcartItem;
  }

  async updateCart(cart: any) {
    const getCartItem = await this.prisma.cartItem.aggregate({
      _sum: {
        productprice: true,
      },
      _count: {
        userid: true,
      },
      where: { cartidId: cart.id },
    })
    if (getCartItem) {
      let total_price = (getCartItem._sum.productprice)
      let total_item = (getCartItem._count.userid)
      let cartupdate = await this.prisma.cart.update({
        where: { id: cart.id },
        data: {
          totalprice: total_price,
          totalItem: total_item
        },

      })
      return cartupdate;
    }
  }

  async addtoCart(data: any) {
    
    const condition = [{ userid: data.userId }, { active: true }]
    const cart = await this.prisma.cart.findFirst({
      where: { AND: condition },
      select: { id: true, totalItem: true, totalprice: true, userid: true }
    })
    if (!cart) {
      const productDetail: any = await this.getProduct(data)
      const total_price = (productDetail.price * data.quantity)
      if (productDetail) {
        const addtoCart: any = await this.prisma.cart.create({
          data: { userid: data.userId, totalItem: 1, totalprice: total_price,active: true }
        })
        if (addtoCart) {
          const addCartItem: any = await this.addItem(addtoCart.id, data, productDetail)
          if (addCartItem) {
            return { success: true, msg: "product add to cart successfully" }
          }
        }
      }
    } else {
      const checkItemRes: any = await this.checkCartItem(data)
      const productDetail: any = await this.getProduct(data)

      if (checkItemRes) {
        const total_qty = (checkItemRes.quantity + data.quantity)
        const cartItemUpdate = await this.prisma.cartItem.update({
          where: { id: checkItemRes.id },
          data: {
            productprice: (productDetail.price * total_qty),
            quantity: total_qty
          },
        })
          await this.updateCart(cart)
          return { success: true, msg: "cart item update successfully" }
      } else {
        const addCartItem: any = await this.addItem(cart.id, data, productDetail)
        if (addCartItem) {
          await this.updateCart(cart)
          return { success: true, msg: "product add to cart successfully" }
        }
      }
    }
  }

  async getCartItems(params: any) {

    let cartlist:any = await this.prisma.cart.findFirst({
      where: {
        AND:[
          {userid: params.id},
          {active:true}
        ]
      },
      select: {
        id:true,
        userid:true,
        cartitems: {
         select: {
             quantity: true,
             cartidId:true,
             userid:true,
            productid: {
              select: {
                id:true,
                productname: true,
                price: true,
                image: true,
                brandid: {
                  select: {
                    brandname: true
                  }
                }
              }
            }
          }
        },
       
      }
    })
    
    if(cartlist){
    let cat_item:any = cartlist
    let total = []
    for(let x of cat_item.cartitems){
      total.push(x.quantity * x.productid.price) 
    }
    cartlist.totalItem = total.length
    cartlist.totalprice = eval(total.join("+"))
    
    await this.prisma.cart.update({
      where: {
        id: cartlist.id,
      },
      data: {
        totalItem: cartlist.totalItem,
        totalprice: cartlist.totalprice,
      },
    })
      return { status:true,data:cartlist };
    }else{
      return { status:true,data:{} };    
    }
  }
}
