import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CrearUsuarioDto } from './dto/users.dto';
import { ActualizarUserDto } from './dto/ActualizarUser.dto';

@Controller('user')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get()
    findAll(){
        return this.userService.findAll();
    }
    
    @Get(':id')
    findOneById(@Param('id') id: string){
        const user = this.userService.findOneById(id);
        if(!user) throw new NotFoundException('Usuario no encontrado');
        return user;
    }
    
    @Get('nombre/:nombre')
    findOne(@Param('nombre') nombre: string){
        const user = this.userService.findOne(nombre);
        if(!user) throw new NotFoundException('Usuario no encontrado');
        return user;
    }

    @Post()
    async crear(@Body() body: CrearUsuarioDto){
        try{
            return await this.userService.crear(body);
        }catch(error){
            if (error.code === 11000){
                return {error: 'Usuario ya existe'};
            }
            return {error: 'Error en el servidor'};
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async eliminar(@Param('id') id: string){
        const user = await this.userService.Eliminar(id)
        if(!user) throw new NotFoundException('Usuario no encontrado');
        return user;
    }

    @Put(':id')
    async actualizar(@Param('id') id: string, @Body() body: ActualizarUserDto){
        const user = await this.userService.Actualizar(id, body);
        if(!user) throw new NotFoundException('Usuario no encontrado');
        return user;
    }
}
