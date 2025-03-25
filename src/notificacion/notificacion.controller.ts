import { Controller, Body, Get, Post, Param, Put, Delete, HttpCode, NotFoundException } from '@nestjs/common';
import { NotificacionService } from './notificacion.service';
import { CrearNotificacionDto } from './dto/notificacion.dto';
import { ActualizarNotificacionDto } from './dto/actualizarNotificacion.dto';

@Controller('notificacion')
export class NotificacionController {
    constructor(private readonly notificacionService: NotificacionService) {}

    @Get()
    findAll(){
        return this.notificacionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.notificacionService.findOne(id);
    }

    @Post()
    async crear(@Body() crearNotificacionDto: CrearNotificacionDto){
        const notificacion = await this.notificacionService.crear(crearNotificacionDto);
        return notificacion;
    }

    @Put(':id')
    async actualizar(@Param('id') id: string, @Body() body: ActualizarNotificacionDto){
        const notificacion = await this.notificacionService.actualizar(id, body);
        if(!notificacion)throw new NotFoundException('No se encontró la notificación');
        return notificacion; 
    }

    @Delete(':id')
    @HttpCode(204)
    async eliminar(@Param('id') id: string){
        const notificacion = await this.notificacionService.eliminar(id);
        if(!notificacion)throw new NotFoundException('No se encontró la notificación');
        return notificacion;
    }


}
