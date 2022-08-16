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
import { ProductUpdateManyWithoutCartsInput } from "./ProductUpdateManyWithoutCartsInput";
import {
  ValidateNested,
  IsOptional,
  IsNumber,
  IsInt,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
@InputType()
class CartUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutCartsInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutCartsInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutCartsInput, {
    nullable: true,
  })
  productid?: ProductUpdateManyWithoutCartsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  productprice?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userid?: string | null;
}
export { CartUpdateInput };
