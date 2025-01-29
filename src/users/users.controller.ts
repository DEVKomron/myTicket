import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @HttpCode(200)
  @Post("add-role")
  adddRole(@Body() adddRoleDto: AddRoleDto) {
    return this.usersService.addRole(adddRoleDto);
  }

  @HttpCode(200)
  @Post("remove-role")
  removeRole(@Body() adddRoleDto: AddRoleDto) {
    return this.usersService.removeRole(adddRoleDto);
  }

  @HttpCode(200)
  @Post("activate")
  activate(@Body() activateusertdto: ActivateUserDto) {
    return this.usersService.activateUser(activateusertdto);
  }

  @HttpCode(200)
  @Post("de-activate")
  deActivate(@Body() activateusertdto: ActivateUserDto) {
    return this.usersService.deActivateUser(activateusertdto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
