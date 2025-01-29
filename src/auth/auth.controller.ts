import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";

import { SignInDto } from "./dto/sign-in.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signUp(@Body() createUserDto: CreateUserDto) {
    console.log("createUserDto", createUserDto);
    
    return this.authService.signUp(createUserDto);
  }
  @HttpCode(HttpStatus.OK)
  @Post("signin")
  async signIn(@Body() signIndto: SignInDto) {
    return this.authService.signIn(signIndto);
  }
}
