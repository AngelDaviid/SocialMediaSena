import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, NotFoundException} from '@nestjs/common';
import { EventoService } from './evento.service';
import { CrearEventoDto } from './dto/evento.dto';
import { ActualizarEventoDto } from './dto/actualizarEvento.dto';


@Controller('evento')
export class EventoController {
    constructor(private readonly eventoService: EventoService){}

    @Get()
    findAll(){
        return this.eventoService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:string ){
        const evento = this.eventoService.findOne(id)
        if(!evento) throw new NotFoundException('Evento no encontrado')
        return evento;
    }

    @Post()
    async crear(@Body() body: CrearEventoDto){
        const evento = await this.eventoService.crear(body)
        return evento
    }

    @Put(':id')
    async actualizar(@Param('id') id:string, @Body() actualizarEventoDto: ActualizarEventoDto){
        const evento = await this.eventoService.actualizar(id, actualizarEventoDto)
        if(!evento) throw new NotFoundException('Evento no encontrado') 
        return evento;
    }

    @Delete(':id')
    @HttpCode(204)
    async eliminar(@Param('id') id:string){
        const evento = await this.eventoService.eliminar(id)
        if(!evento) throw new NotFoundException('Evento no encontrado')
        return evento;
    }
}
