import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, NotFoundException } from '@nestjs/common';
import { PostulacionService } from './postulacion.service';
import { CrearPostulacionDto } from './dto/postulacion.dto'
import { ActualizarPostulacionDto } from './dto/actualizarPostulacion.dto';

@Controller('postulacion')
export class PostulacionController {
    constructor(readonly postulacionService: PostulacionService){}

    @Get()
    findAll(){
        return this.postulacionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id: string){
        const postulacion = this.postulacionService.findOne(id);
        if(!postulacion) throw new NotFoundException('Postulacion no encontrada')
        return postulacion;
    }

    @Post()
    async crear(@Body() body: CrearPostulacionDto){
        const postulacion = await this.postulacionService.crear(body);
        return postulacion;
    }

    @Put(':id')
    async actualizar(@Param('id') id: string, @Body() body: ActualizarPostulacionDto){
        const postulacion = await this.postulacionService.actualizar(id, body);
        if(!postulacion) throw new NotFoundException('Postulacion no encontrada')
        return postulacion;
    }


    @Delete(':id')
    @HttpCode(204)
    async eliminar(@Param('id')id:string){
        const postulacion = await this.postulacionService.eliminar(id);
        if(!postulacion) throw new NotFoundException('Postulacion no encontrada')
        return postulacion;
    }
}
