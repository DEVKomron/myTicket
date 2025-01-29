import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import * as bcrypt from "bcrypt"
import { User } from "../users/models/user.model";
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthService {
  constructor(
    private readonly userServise: UsersService,
    private readonly jwtService: JwtService
    
  ) {}

    private async generateToken(user: User) {
      const payload = { id: user.id, email: user.email, roles: user.roles };
      return {token: this.jwtService.sign(payload)}
    }

  async signUp(createUserDto: CreateUserDto) {
    const condidate = await this.userServise.findUserByEmail(
      createUserDto.email
    );
    if(condidate){
        throw new BadRequestException("Bunday foydalanuchi mavjud")
    }
    const hashedPssword = await bcrypt.hash(createUserDto.password, 7)
    createUserDto.password = hashedPssword;
    const newuser = await this.userServise.create(createUserDto)

    return this.generateToken(newuser)

  }
}
