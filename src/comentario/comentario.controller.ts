import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { ComentarioDto } from './dto/comentario.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';

@Controller('comentario')
export class ComentarioController {
    constructor(private readonly comentarioService: ComentarioService) {}

    @Get()
    findAll() {
        return this.comentarioService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.comentarioService.findOne(id);
    }

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: multer.memoryStorage(), //almacenamos el archivo en memoria
    }))
    async crear(@Body() comentarioDto: ComentarioDto, @UploadedFile() file: Express.Multer.File) {
        console.log(file); //verifica si el archivo se subio correctamente
        console.log(comentarioDto); //verifica si el body se subio correctamente
        if (!file) {
            throw new Error('El archivo no se encuentra');
        }
        const archivoBase64 = file.buffer.toString('base64')

        const nuevoComentario= {
            ...comentarioDto, 
            archivo: archivoBase64, //lo transformamos a base64 para guardarlo en la base de datos
        }

        return  await this.comentarioService.crear(nuevoComentario);
    }

    @Put(':id')
    async actualizar(@Param('id') id: string, @Body() comentarioActualizar: ComentarioDto) {
        return this.comentarioService.actualizar(id, comentarioActualizar);
    }

    @HttpCode(200)
    @Delete(':id')
    async eliminar(@Param('id') id: string) {
        return this.comentarioService.eliminar(id);
    }

}
