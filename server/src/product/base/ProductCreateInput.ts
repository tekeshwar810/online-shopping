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
import { AttributeWhereUniqueInput } from "../../attribute/base/AttributeWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsJSON,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { BrandWhereUniqueInput } from "../../brand/base/BrandWhereUniqueInput";
import { CartItemCreateNestedManyWithoutProductsInput } from "./CartItemCreateNestedManyWithoutProductsInput";
import { GraphQLJSONObject } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";
@InputType()
class ProductCreateInput {
  @ApiProperty({
    required: false,
    type: () => AttributeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AttributeWhereUniqueInput)
  @IsOptional()
  @Field(() => AttributeWhereUniqueInput, {
    nullable: true,
  })
  attributeId?: AttributeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => BrandWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BrandWhereUniqueInput)
  @IsOptional()
  @Field(() => BrandWhereUniqueInput, {
    nullable: true,
  })
  brandid?: BrandWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CartItemCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => CartItemCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => CartItemCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  carts?: CartItemCreateNestedManyWithoutProductsInput;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSONObject)
  categoryid!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  image!: string;

  @ApiProperty({
    required: false,
    type: () => OrderItemCreateNestedManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => OrderItemCreateNestedManyWithoutProductsInput)
  @IsOptional()
  @Field(() => OrderItemCreateNestedManyWithoutProductsInput, {
    nullable: true,
  })
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  productname!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sku?: string | null;
}
export { ProductCreateInput };
