/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CartItemWhereUniqueInput } from "../../cartItem/base/CartItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class CartItemUpdateManyWithoutProductsInput {
  @Field(() => [CartItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CartItemWhereUniqueInput],
  })
  connect?: Array<CartItemWhereUniqueInput>;

  @Field(() => [CartItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CartItemWhereUniqueInput],
  })
  disconnect?: Array<CartItemWhereUniqueInput>;

  @Field(() => [CartItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CartItemWhereUniqueInput],
  })
  set?: Array<CartItemWhereUniqueInput>;
}
export { CartItemUpdateManyWithoutProductsInput };
