import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { InscripcionEventoService } from "./inscripcion-evento.service";
import { InscripcionEventoDto } from "./dto/incripcionEvento.dto";


@Controller('inscripcion-evento')
export class InscripcionEventoController{
    constructor(private readonly inscripcioneventoService: InscripcionEventoService){}

    @Get()
    findAll(){
        return this.inscripcioneventoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.inscripcioneventoService.findOne(id);
    }

    @Post()
    async crear(@Body() body: InscripcionEventoDto){ 
        return await this.inscripcioneventoService.crear(body);
    }

    @Put(':id')
    async actualizar(@Param('id') id: string, @Body() body: InscripcionEventoDto){
        const inscripcionEvento = await this.inscripcioneventoService.actualizar(id, body);
        if(!inscripcionEvento) throw new NotFoundException('Inscripcion no encontrrada');
    }

    @Delete(':id')
    async eliminar(@Param('id') id: string){
        const inscripcionEvento = await this.inscripcioneventoService.eliminar(id);
        if(!id) throw new NotFoundException('Inscripcion no encontrada');
    }
}