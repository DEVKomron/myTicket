import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './model/role.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {}
  create(createRoleDto: CreateRoleDto) {
    return this.roleModel.create({
      value: createRoleDto.value.toUpperCase(),
      description: createRoleDto.description,
    });
  }

  findAll() {
    return this.roleModel.findAll();
  }

  findOne(id: number) {
    return this.roleModel.findByPk(id);
  }

  findRoleByValue(value: string) {
    return this.roleModel.findOne({where: {value : value.toUpperCase()}})
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
