import { Injectable } from "@nestjs/common";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { VenueType } from "./models/venue_type.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(VenueType) private venueTypeModel: typeof VenueType
  ) {}
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeModel.create(createVenueTypeDto);
  }

  findAll() {
    return this.venueTypeModel.findAll({include :{all: true}});
  }

  findOne(id: number) {
    return this.venueTypeModel.findOne({ where: { id } });
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const venue = await this.venueTypeModel.update(updateVenueTypeDto, {
      where: { id },
      returning: true,
    });
    return venue[1][0];
  }

  remove(id: number) {
    return this.venueTypeModel.destroy({ where: { id } });
  }
}
