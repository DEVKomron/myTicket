import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerAddress } from './model/customer_address.model';

@Injectable()
export class CustomerAddressService {
  constructor(@InjectModel(CustomerAddress) private customerAdressModel: typeof CustomerAddress){}
  create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAdressModel.create(createCustomerAddressDto)
  }

  findAll() {
    return this.customerAdressModel.findAll()
  }

  findOne(id: number) {
    return this.customerAdressModel.findOne({where: {id}})
  }

 async update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    const customer_address =  this.customerAdressModel.update(updateCustomerAddressDto, {where: {id}, returning : true })
  }

  remove(id: number) {
    return this.customerAdressModel.destroy({where: {id}})
  }
}
