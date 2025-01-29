import { Injectable } from "@nestjs/common";
import { CreateDeliveryMethodDto } from "./dto/create-delivery_method.dto";
import { UpdateDeliveryMethodDto } from "./dto/update-delivery_method.dto";
import { InjectModel } from "@nestjs/sequelize";
import { DeliveryMethod } from "./models/delivery_method.model";

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod) private deliverMethod: typeof DeliveryMethod
  ) {}
  create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliverMethod.create(createDeliveryMethodDto);
  }

  findAll() {
    return this.deliverMethod.findAll();
  }

  findOne(id: number) {
    return this.deliverMethod.findOne({ where: { id } });
  }

  async update(id: number, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    const deliver = await this.deliverMethod.update(updateDeliveryMethodDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.deliverMethod.destroy({where: {id}})
  }
}
