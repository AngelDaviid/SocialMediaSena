import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { MensajeService } from "./mensaje.service";
import { CrearMensajeDto} from "./dto/mensaje.dto";
import { ActualizarMensajeDto } from "./dto/ActualizarMenaje.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import* as multer from 'multer';



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
    @UseInterceptors(FileInterceptor('file',{
        storage: multer.memoryStorage(), //almacenamos el archivo en memoria
    }))
    async crear(@Body() body: CrearMensajeDto, @UploadedFile() file: Express.Multer.File){
        console.log(file)
        console.log(body)
        if(!file){
            throw new Error('Archivo no encontrado')
        }

        const archivoBase64 = file.buffer.toString('base64');

        const nuevoMensaje ={
            ...body,
            archivo: archivoBase64,
        }

        return await this.mensajeService.crear(nuevoMensaje);
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

    @Get('conversation/:conversationId')
    async findOneByConversationId(@Param('conversationId') conversationId: string){
        const mensajes = await this.mensajeService.findOneByConversationId(conversationId);
        if(!mensajes || mensajes.length === 0) throw new NotFoundException('No se encontraron mensajes para esta conversación');
        return mensajes;
    }

}