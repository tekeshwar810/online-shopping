import { InputType, Field, Int } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
    IsString,
    IsNotEmpty,
    IsPositive,
} from "class-validator";
import { Type } from "class-transformer";
import { BrandWhereUniqueInput } from "../brand/base/BrandWhereUniqueInput";

@InputType()
class createOrderInput {
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    id!: string; // shopper id

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    cartid!: string;
}
export { createOrderInput };
