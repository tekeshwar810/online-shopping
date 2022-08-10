/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CartWhereInput } from "./CartWhereInput";
import { Type } from "class-transformer";
import { CartOrderByInput } from "./CartOrderByInput";

@ArgsType()
class CartFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CartWhereInput,
  })
  @Field(() => CartWhereInput, { nullable: true })
  @Type(() => CartWhereInput)
  where?: CartWhereInput;

  @ApiProperty({
    required: false,
    type: [CartOrderByInput],
  })
  @Field(() => [CartOrderByInput], { nullable: true })
  @Type(() => CartOrderByInput)
  orderBy?: Array<CartOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CartFindManyArgs };
