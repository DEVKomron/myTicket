import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerAddressDto {
  @ApiProperty()
  customer_id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  country_id: number;
  @ApiProperty()
  region_id: number;
  @ApiProperty()
  district_id: number;
  @ApiProperty()
  street: string;
  @ApiProperty()
  house: string;
  @ApiProperty()
  flat: number;
  @ApiProperty()
  location: string;
  @ApiProperty()
  post_index: string;
  @ApiProperty()
  info: string;
}
