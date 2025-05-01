import { Body, Controller, Get, Param, Post, Put, NotFoundException, Delete, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { PublicacionService } from './publicacion.service';
import { CrearPublicacionDto } from './dto/publicacion.dto';
import { ActualizarPublicacionDto } from './dto/ActualizarPublicacion.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';




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
    @UseInterceptors(FileInterceptor('file',{
        storage: multer.memoryStorage(), //almacenamos el archivo en memoria
    }))
    async Crear(@Body() body: CrearPublicacionDto, @UploadedFile() file: Express.Multer.File){
        console.log(file)//verifica si el archivo se subio correctamente
        console.log(body)//verifica si el body se subio correctamente
        if(!file){
            throw new Error('El archivo no se encuenta')
        }
        const archivoBase64 = file.buffer.toString('base64');

        //objeto utilizado para estructurar la informacion que se va a guardar en la base de datos
        const nuevaPublicacion = {
            ...body, //se utiliza el operador de propagacion (...) para incluir las propiedades del objeto body
            archivo: archivoBase64, //lo transformamos a base64 para guardarlo en la base de datos
        };

        return await this.publicacionService.crear(nuevaPublicacion);
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
