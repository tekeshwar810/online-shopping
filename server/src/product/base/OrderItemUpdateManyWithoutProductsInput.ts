/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OrderItemWhereUniqueInput } from "../../orderItem/base/OrderItemWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class OrderItemUpdateManyWithoutProductsInput {
  @Field(() => [OrderItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderItemWhereUniqueInput],
  })
  connect?: Array<OrderItemWhereUniqueInput>;

  @Field(() => [OrderItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderItemWhereUniqueInput],
  })
  disconnect?: Array<OrderItemWhereUniqueInput>;

  @Field(() => [OrderItemWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OrderItemWhereUniqueInput],
  })
  set?: Array<OrderItemWhereUniqueInput>;
}
export { OrderItemUpdateManyWithoutProductsInput };
