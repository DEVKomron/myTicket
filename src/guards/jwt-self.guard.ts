import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class JwtSelfGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    if (!req.user.id !== req.params.id) {
      throw new UnauthorizedException({
        message: "Ruxsat etilmagan foydalanuchi",
      });
    }

    return true;
  }
}
