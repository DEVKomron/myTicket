import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../decorators/roles-auth.decorator";


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly jwtServise: JwtService,
    private  readonly reflector: Reflector
) {}


  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const reqaredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY,
         [context.getHandler(), context.getClass()]
        )

    if (!reqaredRoles) {
        return true;        
    }


    const req = context.switchToHttp().getRequest();

    const authHeder = req.headers.authorization;

    if (!authHeder) {
      throw new UnauthorizedException({
        message: "Hederda token yoq aka ",
      });
    }
    const Baerer = authHeder.split(" ")[0];
    const token = authHeder.split(" ")[1];

    if (Baerer !== "Bearer" || !token) {
      throw new UnauthorizedException({
        mesage: "token yo baereer hatooooooo",
      });
    }

    let user: any;
    try {
      user = this.jwtServise.verify(token);
      console.log(user);
    } catch (error) {
      console.log(error);

      throw new UnauthorizedException({
        message: "Token verifation failed",
      });
    }
    req.user = user;



    const permission = user.roles.some((role: any) => {
        reqaredRoles.includes(role.value)
    })
    if (!permission) {
        throw new ForbiddenException({
            message: "sizga ruhsat yo"
        })
        
    }

    return true;
  }
}
