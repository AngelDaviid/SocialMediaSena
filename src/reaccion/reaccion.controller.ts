import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ReaccionService } from './reaccion.service';
import { ReaccionDto } from './dto/reaccion.dto';

@Controller('reaccion')
export class ReaccionController {
    constructor(private readonly reaccionService: ReaccionService){}

    @Get()
    findAll(){
        return this.reaccionService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        const reaccion = await this.reaccionService.findOne(id)
        if(!reaccion) throw new NotFoundException('Reaccion no encontrada')
        return reaccion;
    }

    @Post()
    async crear(@Body() crearReaccion: ReaccionDto){
        const reaccion = await this.reaccionService.crear(crearReaccion)
        return reaccion
    }

    @Put(':id')
    async actualizar (@Param('id') id:string,  @Body() body: ReaccionDto){
        const reaccion = await this.reaccionService.actualizar(id, body)
        if(!reaccion) throw new NotFoundException('Reaccion no encontrada')
        return reaccion;
    }

    @Delete(':id')
    @HttpCode(204)
    async eliminar(@Param('id') id:string){
        const reaccion = this.reaccionService.eliminar(id)
        if(!reaccion) throw new NotFoundException('Reaccion no encontrada')
        return reaccion;
    }
}
