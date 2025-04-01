import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    async validarUser(username: string, password: string){
        const user = await this.userService.findOneUser(username);
        if(user && bcrypt.compareSync(password, user.password)){
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any){
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async hashPassword(password: string): Promise <string>{
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
}
