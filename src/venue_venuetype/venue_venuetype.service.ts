import { Injectable } from "@nestjs/common";
import { CreateVenueVenuetypeDto } from "./dto/create-venue_venuetype.dto";
import { UpdateVenueVenuetypeDto } from "./dto/update-venue_venuetype.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenueVenuetype } from "./model/venue_venuetype.model";

@Injectable()
export class VenueVenuetypeService {
  constructor(
    @InjectModel(VenueVenuetype)
    private venuVenuTypeModel: typeof VenueVenuetype
  ) {}


  create(createVenueVenuetypeDto: CreateVenueVenuetypeDto) {
    return this.venuVenuTypeModel.create(createVenueVenuetypeDto);
  }

  findAll() {
    return this.venuVenuTypeModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.venuVenuTypeModel.findOne();
  }

  async update(id: number, updateVenueVenuetypeDto: UpdateVenueVenuetypeDto) {
    const venuVenu = await this.venuVenuTypeModel.update(
      updateVenueVenuetypeDto,
      {
        where: { id },
        returning: true,
      }
    );
    return venuVenu;
  }

  remove(id: number) {
    return this.venuVenuTypeModel.destroy({where : {id}});
  }
}
