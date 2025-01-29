import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import * as bcrypt from "bcrypt";
import { User } from "../users/models/user.model";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/sign-in.dto";
@Injectable()
export class AuthService {
  constructor(
    private readonly userServise: UsersService,
    private readonly jwtService: JwtService
  ) {}

  private async generateToken(user: User) {
    const payload = { id: user.id, email: user.email, roles: user.roles };
    return { token: this.jwtService.sign(payload) };
  }

  async signUp(createUserDto: CreateUserDto) {
    console.log("xatooooooo XXXXXX");
    const condidate = await this.userServise.findUserByEmail(
      createUserDto.email
    );
    if (condidate) {
      throw new BadRequestException("Bunday foydalanuchi mavjud");
    }
    const hashedPssword = await bcrypt.hash(createUserDto.password, 7);
    createUserDto.password = hashedPssword;
    const newuser = await this.userServise.create(createUserDto);

    return this.generateToken(newuser);
  }

  async signIn(signInDto: SignInDto) {
    console.log(signInDto);

    const user = await this.userServise.findUserByEmail(signInDto.email);
    if (!user) {
      throw new UnauthorizedException("Emai yoki parol xato");
    }

    const isValidPassword = await bcrypt.compare(
      signInDto.password,
      user.password
    );
    if (!isValidPassword) {
      throw new UnauthorizedException("email yoki parol xato");
    }
    console.log(user);
    
    if (user.roles[0].value == signInDto.value.toUpperCase()) {
      throw new ForbiddenException("Sizda bunday role yo'q");
    }

    return this.generateToken(user);
  }
}
