import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './model/region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionmodel: typeof Region){}
  create(createRegionDto: CreateRegionDto) {
    return this.regionmodel.create(createRegionDto)
  }

  findAll() {
    return this.regionmodel.findAll()
  }

  findOne(id: number) {
    return this.regionmodel.findOne({where : {id}})
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
   const region = await this.regionmodel.update(updateRegionDto, {
     where: { id },
     returning: true,
   });
   return region[1][0];
  }

  remove(id: number) {
    return this.regionmodel.destroy({where : {id}})
  }
}
