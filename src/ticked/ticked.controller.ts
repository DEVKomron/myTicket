import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TickedService } from './ticked.service';
import { CreateTickedDto } from './dto/create-ticked.dto';
import { UpdateTickedDto } from './dto/update-ticked.dto';

@Controller('ticked')
export class TickedController {
  constructor(private readonly tickedService: TickedService) {}

  @Post()
  create(@Body() createTickedDto: CreateTickedDto) {
    return this.tickedService.create(createTickedDto);
  }

  @Get()
  findAll() {
    return this.tickedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tickedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTickedDto: UpdateTickedDto) {
    return this.tickedService.update(+id, updateTickedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tickedService.remove(+id);
  }
}
