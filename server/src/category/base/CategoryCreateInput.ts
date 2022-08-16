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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";
import { Type } from "class-transformer";
@InputType()
class CategoryCreateInput {
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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  parentid?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  products?: ProductCreateNestedManyWithoutCategoriesInput;
}
export { CategoryCreateInput };
