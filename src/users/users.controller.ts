import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JwtSelfGuard } from '../guards/jwt-self.guard';
import { Roles } from '../decorators/roles-auth.decorator';
import { RolesGuard } from '../guards/roles.guard';

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @HttpCode(200)
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
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

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtSelfGuard)
  @UseGuards(JwtAuthGuard)
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
