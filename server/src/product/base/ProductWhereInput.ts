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
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BrandWhereUniqueInput } from "../../brand/base/BrandWhereUniqueInput";
import { CartItemListRelationFilter } from "../../cartItem/base/CartItemListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../../orderItem/base/OrderItemListRelationFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
@InputType()
class ProductWhereInput {
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
  attributeId?: AttributeWhereUniqueInput;

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
  brandid?: BrandWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CartItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CartItemListRelationFilter)
  @IsOptional()
  @Field(() => CartItemListRelationFilter, {
    nullable: true,
  })
  carts?: CartItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  categoryid?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  image?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => OrderItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrderItemListRelationFilter)
  @IsOptional()
  @Field(() => OrderItemListRelationFilter, {
    nullable: true,
  })
  orderItems?: OrderItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  price?: FloatFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  productname?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  sku?: StringNullableFilter;
}
export { ProductWhereInput };
