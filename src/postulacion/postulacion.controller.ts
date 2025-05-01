import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode, NotFoundException, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PostulacionService } from './postulacion.service';
import { CrearPostulacionDto } from './dto/postulacion.dto'
import { ActualizarPostulacionDto } from './dto/actualizarPostulacion.dto';
import * as multer from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

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
    @UseInterceptors(FileInterceptor('file', {
        storage: multer.memoryStorage(),
    }))
    async crear(@Body() body: CrearPostulacionDto, @UploadedFile() file: Express.Multer.File){
        console.log(file)
        console.log(body)
        if(!file){
            throw new Error('Archivo no encontrado')
        }

        const archivoBase64 = file.buffer.toString('base64');

        const nuevaPostulacion = { 
            ...body,
            cvAdjunto: archivoBase64, 
        }


        return await this.postulacionService.crear(nuevaPostulacion);
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
