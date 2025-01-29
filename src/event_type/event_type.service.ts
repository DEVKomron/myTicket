import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { EventType } from './models/event_type.model';

@Injectable()
export class EventTypeService {
  constructor(@InjectModel(EventType) private event_typeModel: typeof EventType){}
  create(createEventTypeDto: CreateEventTypeDto) {
    return this.event_typeModel.create(createEventTypeDto)
  }

  findAll() {
    return this.event_typeModel.findAll()
  }

  findOne(id: number) {
    return this.event_typeModel.findOne({where : {id}})
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
  const event_type = await this.event_typeModel.update(updateEventTypeDto, {where: {id}, returning: true})
  }

  remove(id: number) {
    return this.event_typeModel.destroy({where : {id}})
}
}