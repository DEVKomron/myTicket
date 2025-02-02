import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export  class JwtAuthGuard implements  CanActivate{
    constructor(private readonly jwtServise : JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // logic
        const req = context.switchToHttp().getRequest()
        // console.log(req)
        const authHeder = req.headers.authorization;
        if(!authHeder){
            throw new UnauthorizedException({
                message: "Hederda token yoq aka "
            })
        }
        const Baerer = authHeder.split(" ")[0];
        const token = authHeder.split(" ")[1];
        
        if(Baerer !== "Bearer" || !token){
            throw new UnauthorizedException({
                mesage: "token yo baereer hatooooooo"
            })
        }

        let user: any;
        try {
                user = this.jwtServise.verify(token)
                console.log(user);
                






        } catch (error) {
            console.log(error);
            
            throw new UnauthorizedException({
                message: "Token verifation failed"
            })
            
        }
        req.user = user



        return true
    }
}