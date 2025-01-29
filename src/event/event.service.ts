import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './model/event.model';

@Injectable()
export class EventService {

  constructor(
    @InjectModel(Event) private eventTypeModel : typeof Event
  ){}

  create(createEventDto: CreateEventDto) {
    return this.eventTypeModel.create(createEventDto)
  }

  findAll() {
    return this.eventTypeModel.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.eventTypeModel.findByPk(id)
  }

  // async update(id: number, updateEventDto: UpdateEventDto) {
  //   const event = await this.eventTypeModel.update ( updateEventDto, {
  //     where : {id},
  //     returning : true
  //   })
  // }

  remove(id: number) {
    return this.eventTypeModel.destroy({where : {id}})
  }
}
