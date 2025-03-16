import { Controller, Get, Post, Put, Body, Param, Delete, HttpCode, NotFoundException } from '@nestjs/common';
import { EmpleoService } from './empleo.service';
import { CrearEmpleoDto } from './dto/empleo.dto';
import { ActualizarEmpleoDto } from './dto/actualizarEmpleo.dto';

@Controller('empleo')
export class EmpleoController {
    constructor(private readonly empleoService: EmpleoService){}

    @Get()
    findAll(){
        return this.empleoService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        const empleo = this.empleoService.findOne(id)
        if(!empleo) throw new NotFoundException('Empleo no encontrado')
        return empleo;
    }

    @Post()
    async crear(@Body() body :CrearEmpleoDto){
        const empleo = this.empleoService.crear(body)
        return empleo;
    }

    @Put(':id')
    async actualizar(@Param('id') id:string, @Body() actualizarEmpleo: ActualizarEmpleoDto){
        const empleo = await this.empleoService.actualizar(id, actualizarEmpleo)
        if(!empleo) throw new NotFoundException('Empleo no encotrado')
        return empleo; 
    }

    @Delete(':id')
    @HttpCode(204)
    async eliminar(@Param('id') id:string ){
        const empleo = this.empleoService.eliminar(id)
        if(!empleo) throw new NotFoundException('Empleo no encontrado')
        return empleo;
    }
}
