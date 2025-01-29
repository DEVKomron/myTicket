import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueVenuetypeService } from './venue_venuetype.service';
import { CreateVenueVenuetypeDto } from './dto/create-venue_venuetype.dto';
import { UpdateVenueVenuetypeDto } from './dto/update-venue_venuetype.dto';

@Controller('venue-venuetype')
export class VenueVenuetypeController {
  constructor(private readonly venueVenuetypeService: VenueVenuetypeService) {}

  @Post()
  create(@Body() createVenueVenuetypeDto: CreateVenueVenuetypeDto) {
    return this.venueVenuetypeService.create(createVenueVenuetypeDto);
  }

  @Get()
  findAll() {
    return this.venueVenuetypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueVenuetypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueVenuetypeDto: UpdateVenueVenuetypeDto) {
    return this.venueVenuetypeService.update(+id, updateVenueVenuetypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueVenuetypeService.remove(+id);
  }
}
