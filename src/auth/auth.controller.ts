import { Body, Controller, UnauthorizedException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService
    ){}

    @Post('login')
    async login(@Body() body: { nombre: string, password: string}) {
        const user = await this.authService.validarUser(body.nombre, body.password);
        if (!user){
            throw new UnauthorizedException('Credenciales invalidas');
        }
        return this.authService.login(user);
    }

}

