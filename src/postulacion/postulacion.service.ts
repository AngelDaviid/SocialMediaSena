import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Postulacion } from './schema/postulacion.schema'
import { CrearPostulacionDto } from './dto/postulacion.dto';
import { ActualizarPostulacionDto } from './dto/actualizarPostulacion.dto';

@Injectable()
export class PostulacionService {
    constructor(@InjectModel('Postulacion') private readonly postulacionModel: Model<Postulacion>){}

    findAll(){
        return this.postulacionModel.find().exec();
    }

    findOne(id:string){
        return this.postulacionModel.findById(id).exec();
    }

    async crear(crearPostulacionDto: CrearPostulacionDto): Promise<Postulacion> {
        const nuevaPostulacion = new this.postulacionModel(crearPostulacionDto);
        return await nuevaPostulacion.save(); 
    }

    async actualizar (id: string, actualizarPostulacion : ActualizarPostulacionDto){
        return await this.postulacionModel.findByIdAndUpdate(id, actualizarPostulacion, {new: true});
    }

    async eliminar(id: string){
        return await this.postulacionModel.findByIdAndDelete(id);
    }

}
