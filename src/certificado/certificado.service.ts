import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Certificado } from './schema/certificado.schema';
import { CrearCertificadoDto } from './dto/certificado.dto';
import { ActualizarCertificadoDto } from './dto/actualizarCertificado.dto';

@Injectable()
export class CertificadoService {
    constructor(@InjectModel('Certificado') private readonly certificadoModel: Model<Certificado>){}

    findAll(){
        return this.certificadoModel.find()
    }

    findOne(id:string){
        return this.certificadoModel.findById(id)
    }

    async crear(crearCertificado: CrearCertificadoDto){
        const certificado = new this.certificadoModel(crearCertificado)
        return certificado.save()
    }

    async actualizar(id:string, actualizarCertificado: ActualizarCertificadoDto){
        return await this.certificadoModel.findByIdAndUpdate(id, actualizarCertificado, { new:true })
    }

    async eliminar(id:string){
        return await this.certificadoModel.findByIdAndDelete(id)
    }



}
