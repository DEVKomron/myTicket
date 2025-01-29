import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './model/district.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DistrictService {
   constructor(
    @InjectModel(District) private districtmodel: typeof District){}
  create(createDistrictDto: CreateDistrictDto) {
    return this.districtmodel.create(createDistrictDto)
  }

  findAll() {
    return this.districtmodel.findAll({include: {all: true}})
  }

  findOne(id: number) {
    return this.districtmodel.findOne({where: {id}})
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const district = this.districtmodel.update(updateDistrictDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.districtmodel.destroy({where: {id}})  }
}
