import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Publicacion } from './schema/publicacion.schema';
import { Model } from 'mongoose';
import { CrearPublicacionDto } from './dto/publicacion.dto';
import { ActualizarPublicacionDto } from './dto/ActualizarPublicacion.dto';

@Injectable()
export class PublicacionService {
    constructor(@InjectModel('Publicacion') private userModel: Model<Publicacion>){}

    async findAll(){
        return await this.userModel.find().exec();
    }

    async findOne(id: string){
        return await this.userModel.findById(id).exec();
    }

    async crear(publicacionDto: CrearPublicacionDto): Promise <Publicacion>{
        const publicacion = new this.userModel(publicacionDto);
        return await publicacion.save();
    }

    async actualizar(id: string, publicacionDto: ActualizarPublicacionDto){
        return await this.userModel.findByIdAndUpdate(id, publicacionDto, {new: true});
    }

    async eliminar(id: string){
        return await this.userModel.findByIdAndDelete(id);
    }

}
