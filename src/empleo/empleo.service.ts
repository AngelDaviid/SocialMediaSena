import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Empleo } from './schema/empleo.schema';
import { Model } from 'mongoose';
import { CrearEmpleoDto } from './dto/empleo.dto';
import { ActualizarEmpleoDto } from './dto/actualizarEmpleo.dto';

@Injectable()
export class EmpleoService {
    constructor(@InjectModel('Empleo') private readonly empleoModel: Model<Empleo>){}

    findAll(){
        return this.empleoModel.find()
    }

    findOne(id:string){
        return this.empleoModel.findById(id)
    }

    async crear(crearEmpleoDto: CrearEmpleoDto){
        const empleo = new this.empleoModel(crearEmpleoDto)
        return await empleo.save()
    
    }

    async actualizar(id:string, body: ActualizarEmpleoDto){
        return await this.empleoModel.findByIdAndUpdate(id, body, {new:true})
    }

    async eliminar(id:string){
        return await this.empleoModel.findByIdAndDelete(id)
    }
}
