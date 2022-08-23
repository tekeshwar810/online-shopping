import { InputType, Field, Int } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
    ValidateNested,
    IsOptional,
    IsJSON,
    IsString,
    IsNumber,
    IsInt,
    IsNotEmpty,
    IsNotIn,
    IsNegative,
    IsPositive,
    isHash,
} from "class-validator";
import { Type } from "class-transformer";
import { BrandWhereUniqueInput } from "../brand/base/BrandWhereUniqueInput";

@InputType()
class CreateCartInput {
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    @Field(() => String)
    userId!: string;

    @ApiProperty({
        required: true,
        type: Number,
    })
    @IsNotEmpty()
    @IsPositive()
    @Field(() => Number)
    quantity!: number;

    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String)
    productId!: string;

}
export { CreateCartInput };
