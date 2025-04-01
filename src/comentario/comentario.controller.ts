import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { ComentarioDto } from './dto/comentario.dto';

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
    async crear(@Body() comentarioDto: ComentarioDto) {
        return this.comentarioService.crear(comentarioDto);
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
