import { PartialType } from '@nestjs/swagger';
import { CreateVenueVenuetypeDto } from './create-venue_venuetype.dto';

export class UpdateVenueVenuetypeDto extends PartialType(CreateVenueVenuetypeDto) {}
