import { InputType, Field, Int } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNumber, IsString } from "class-validator";

@InputType()
class SearchProductInput {
    @ApiProperty({
        required: false,
        type: String,
    })
    @IsString()
    @Field(() => String)
    searchText!: string

    // @ApiProperty({
    //     required: false,
    //     type: String,
    // })
    
    // @Field(() => String)
    // sku!: string

}
export { SearchProductInput };