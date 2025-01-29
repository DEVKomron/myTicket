import { PartialType } from '@nestjs/swagger';
import { CreateTickedDto } from './create-ticked.dto';

export class UpdateTickedDto extends PartialType(CreateTickedDto) {}
