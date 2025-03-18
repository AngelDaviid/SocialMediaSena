import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { MensajeService } from "./mensaje.service";
import { CrearMensajeDto} from "./dto/mensaje.dto";
import { ActualizarMensajeDto } from "./dto/ActualizarMenaje.dto";



@Controller('mensaje')
export class MensajeController{
    constructor(private readonly mensajeService: MensajeService){}

    @Get()
    findAll(){
        return this.mensajeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.mensajeService.findOne(id);
    }

    @Post()
    async crear(@Body() body: CrearMensajeDto){ 
        return await this.mensajeService.crear(body);
    }

    @Put(':id')
    async actualiza(@Param('id') id: string, @Body() body: ActualizarMensajeDto){
            const mensaje = await this.mensajeService.actualizar(id, body);
            if(!mensaje) throw new NotFoundException('Mensaje no encontrado');
    }

    @Delete(':id')
    async eliminar(@Param('id') id: string){
        const mensaje = await this.mensajeService.eliminar(id);
        if(!id) throw new NotFoundException('Mensaje no encontrado');
    }

}