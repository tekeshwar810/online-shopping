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
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";
import { Type } from "class-transformer";
@InputType()
class CategoryUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  categoryname?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  parentid?: number | null;

  @ApiProperty({
    required: false,
    type: () => ProductUpdateManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => ProductUpdateManyWithoutCategoriesInput, {
    nullable: true,
  })
  products?: ProductUpdateManyWithoutCategoriesInput;
}
export { CategoryUpdateInput };
