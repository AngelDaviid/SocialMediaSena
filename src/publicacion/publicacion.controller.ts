import { Body, Controller, Get, Param, Post, Put, NotFoundException, Delete } from '@nestjs/common';
import { PublicacionService } from './publicacion.service';
import { CrearPublicacionDto } from './dto/publicacion.dto';
import { ActualizarPublicacionDto } from './dto/ActualizarPublicacion.dto';

@Controller('publicacion')
export class PublicacionController {
    constructor(private readonly publicacionService: PublicacionService){}

    @Get()
    findAll(){
        return this.publicacionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.publicacionService.findOne(id); 
    }

    @Post() 
    async Crear(@Body() body: CrearPublicacionDto){
        return await this.publicacionService.crear(body);
        }

    @Put(':id')
    async actualiza(@Param('id') id: string, @Body() body: ActualizarPublicacionDto){
        const publicacion = await this.publicacionService.actualizar(id, body);
        if(!publicacion) throw new NotFoundException('Publicacion no encontrada');
    }

    @Delete(':id')
    async eliminar(@Param('id') id: string){
        const publicacion = await this.publicacionService.eliminar(id);
        if(!publicacion) throw new NotFoundException('Publicacion no encontrada');
    }   
}
