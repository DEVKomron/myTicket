import { Injectable } from "@nestjs/common";
import { CreateTicketStatusDto } from "./dto/create-ticket_status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket_status.dto";
import { InjectModel } from "@nestjs/sequelize";
import { TicketStatus } from "./models/ticket_status.model";

@Injectable()
export class TicketStatusService {
  constructor(
    @InjectModel(TicketStatus) private tickedStatusModel: typeof TicketStatus
  ) {}
  create(createTicketStatusDto: CreateTicketStatusDto) {
    return this.tickedStatusModel.create(createTicketStatusDto);
  }

  findAll() {
    return this.tickedStatusModel.findAll();
  }

  findOne(id: number) {
    return this.tickedStatusModel.findOne({ where: { id } });
  }

  async update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    const ticked = await this.tickedStatusModel.update(updateTicketStatusDto, {
      where: { id },
      returning: true,
    });
    return ticked[1][0];
  }

  remove(id: number) {
    return this.tickedStatusModel.destroy({ where: { id } });
  }
}
