import { InputType, Field, Int } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNumber, IsString } from "class-validator";


@InputType()
class FilterProductInput {
    @ApiProperty({
        required: true,
        type: String,
    })
    
    
    @Field(() => String)
    categoryid!: string

    @ApiProperty({
        required: true,
        type: Number,
    })
    
    @Field(() => Number)
    max!: number

    @ApiProperty({
        required: true,
        type: Number,
    })
    
    @Field(() => Number)
    min!: number

    @ApiProperty({
        required: true,
        type: String,
    })
   
    @Field(() => String)
    brandidId!: string
 
}
export { FilterProductInput };
