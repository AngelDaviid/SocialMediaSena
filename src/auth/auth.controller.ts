import { Body, Controller, UnauthorizedException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
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

