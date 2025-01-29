import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';

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

  async addRole(addRoledto: AddRoleDto) {
    const user = await this.userModel.findByPk(addRoledto.userId);
    const role = await this.roleServise.findRoleByValue(addRoledto.value);

    if (role && user) {
      await user.$add("roles", role.id);
      const updateduser = await this.userModel.findByPk(addRoledto.userId, {
        include: { all: true },
      });
      return updateduser;
    }
    throw new NotFoundException(
      "Foydalanuvchi yoki role topilmadi  yoki biz adashdik"
    );
  }

  async removeRole(addRoledto: AddRoleDto) {
    const user = await this.userModel.findByPk(addRoledto.userId);
    const role = await this.roleServise.findRoleByValue(addRoledto.value);

    if (role && user) {
      await user.$remove("roles", role.id);
      const updateduser = await this.userModel.findByPk(addRoledto.userId, {
        include: { all: true },
      });
      return updateduser;
    }
    throw new NotFoundException(
      "Foydalanuvchi yoki role topilmadi  yoki biz adashdik"
    );
  }

  async activateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userModel.findByPk(activateUserDto.userId);
    if (user) {
      user.is_active = true;
      await user.save();
      return user;
    }
    throw new NotFoundException("Foydalanuvchi topilmadi  yoki biz adashdik");
  }

  async deActivateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userModel.findByPk(activateUserDto.userId);
    if (user) {
      user.is_active = false;
      await user.save();
      return user;
    }
    throw new NotFoundException("Foydalanuvchi topilmadi  yoki biz adashdik");
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email }, include: { all: true } });
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
