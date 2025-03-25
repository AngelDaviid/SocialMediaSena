import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CertificadoService } from './certificado.service';
import { CrearCertificadoDto } from './dto/certificado.dto';
import { ActualizarCertificadoDto } from './dto/actualizarCertificado.dto';

@Controller('certificado')
export class CertificadoController {
    constructor(private readonly certificadoService: CertificadoService){}

    @Get()
    findAll(){
        return this.certificadoService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        const certificado = await this.certificadoService.findOne(id)
        if(!certificado) throw new NotFoundException('Certificado no encontrado')
        return certificado;
    }

    @Post()
    async crear(@Body() body: CrearCertificadoDto){
        const certificado = await this.certificadoService.crear(body)
        if(!certificado) throw new NotFoundException('Certificado no encontrado')
        return certificado;
    }

    @Put(':id')
    async actualizar(@Param('id') id:string,  @Body() actualizarCertificado: ActualizarCertificadoDto){
        const certificado = await this.certificadoService.actualizar(id,actualizarCertificado)
        if(!certificado) throw new NotFoundException('Certificado no encontrado')
        return certificado;
    }

    @Delete(':id')
    @HttpCode(204)
    async eliminar(@Param('id') id:string){
        const certificado = await this.certificadoService.eliminar(id)
        if(!certificado) throw new NotFoundException('Certificado no encontrado')
        return certificado;
    } 
    
    
}
