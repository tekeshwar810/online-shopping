import { InputType, Field, Int } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
    ValidateNested,
    IsOptional,
    IsJSON,
    IsString,
    IsNumber,
    IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { BrandWhereUniqueInput } from "../brand/base/BrandWhereUniqueInput";

@InputType()
class AddProductInput {
    @ApiProperty({
        required: true,
        type: String,
    })
    @IsString()
    @Field(() => String)
    brandid!: string;

    @ApiProperty({
        required: true,
        type: [String],
    })
    @IsString({
        each: true,
    })
    @Field(() => [String])
    categoryid!: Array<string>;

    @ApiProperty({
        required: true,
        type: 'string',
        format: 'binary',
    })

    @Field(() => String)
    image!: string;

    @ApiProperty({
        required: true,
        type: Number,
    })
    //   @IsInt()
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
export { AddProductInput };
