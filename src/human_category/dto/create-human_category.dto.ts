import { ApiProperty } from "@nestjs/swagger";

export class CreateHumanCategoryDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  start_age: number;
  @ApiProperty()
  finish_age: number;
  @ApiProperty()
  gender: string;
}
