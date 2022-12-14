/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: false,
    type: () => OrderItemCreateNestedManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => OrderItemCreateNestedManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => OrderItemCreateNestedManyWithoutOrdersInput, {
    nullable: true,
  })
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalprice?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  userid?: UserWhereUniqueInput | null;
}
export { OrderCreateInput };
