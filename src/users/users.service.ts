import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { Role } from 'src/roles/model/role.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    // @InjectModel(Role) private roleModel: typeof Role,
    private readonly roleServise: RolesService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newuser = await this.userModel.create(createUserDto);

    const role = await this.roleServise.findRoleByValue(createUserDto.value);
    if (!role) {
      throw new NotFoundException("role not found");
    }
    await newuser.$set("roles", [role.id]);
    await newuser.save();
    newuser.roles = [role];

    return newuser;
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }
  findUserByEmail(email: string): Promise<User| null>{
    return this.userModel.findOne({where : {email}})
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
