import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/models/user.model";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}



  @Post("sigup")
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }
}
