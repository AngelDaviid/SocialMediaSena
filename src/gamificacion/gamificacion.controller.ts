import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { GamificacionService } from "./gamificacion.service";
import { GamificacionDto } from "./dto/gamificacion.dto";


@Controller('gamificacion')
export class GamificacionController{
    constructor(private readonly gamificacionService: GamificacionService){}

    @Get()
    findAll(){
        return this.gamificacionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.gamificacionService.findOne(id);
    }

    @Post()
    async crear(@Body() body: GamificacionDto){
        const gamificacion = await this.gamificacionService.crear(body);
        return gamificacion;
    }
    
    @Put(':id')
    async actualizar(@Param('id') id: string, @Body() body: GamificacionDto){
        const gamificacion = await this.gamificacionService.actualizar(id, body);
        if(!gamificacion) throw new NotFoundException('Gamificacion no encontrada');
    }

    @Delete(':id')
    async eliminar(@Param('id') id: string){
        const gamificacion = await this.gamificacionService.eliminar(id);
        if(!id) throw new NotFoundException('Gamificacion no encontrada');
    }
}