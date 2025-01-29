import { ApiProperty } from "@nestjs/swagger";

export class CreateDeliveryMethodDto {
    @ApiProperty()    
    name: string;
}
