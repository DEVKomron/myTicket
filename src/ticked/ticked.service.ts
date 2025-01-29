import { Injectable } from "@nestjs/common";
import { CreateTickedDto } from "./dto/create-ticked.dto";
import { UpdateTickedDto } from "./dto/update-ticked.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Ticket } from "./model/ticked.model";

@Injectable()
export class TickedService {
  constructor(@InjectModel(Ticket) private tickedmodel: typeof Ticket) {}

  create(createTickedDto: CreateTickedDto) {
    return this.tickedmodel.create(createTickedDto);
  }

  findAll() {
    return this.tickedmodel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.tickedmodel.findByPk(id);
  }

  async update(id: number, UpdateTickedDto: UpdateTickedDto) {
    const event = await this.tickedmodel.update(UpdateTickedDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.tickedmodel.destroy({ where: { id } });
  }
}
