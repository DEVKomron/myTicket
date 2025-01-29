import { Injectable } from "@nestjs/common";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { SeatType } from "./models/seat_type.models";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatTypemodel: typeof SeatType) {}
  create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypemodel.create(createSeatTypeDto);
  }

  findAll() {
    return this.seatTypemodel.findAll();
  }

  findOne(id: number) {
    return this.seatTypemodel.findOne({ where: { id } });
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    const seat_type = await this.seatTypemodel.update(updateSeatTypeDto, {
      where: { id },
      returning: true,
    });
    return seat_type[1][0];
  }

  remove(id: number) {
    return this.seatTypemodel.destroy({ where: { id } });
  }
}
