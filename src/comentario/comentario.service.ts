import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comentario } from './schema/comentario.schema';
import { Model } from 'mongoose';
import { ComentarioDto } from './dto/comentario.dto';
import { ActualizarComentarioDto } from './dto/actualizarComentario.dto'

@Injectable()
export class ComentarioService {
    constructor(@InjectModel('comentario') private comentarioModel: Model<Comentario> ) {}

    findAll(){
        return this.comentarioModel.find().exec();
    }

    findOne(id:string){
        return this.comentarioModel.findById(id)
    }

    async crear(comentarioDto: ComentarioDto){
        const comentario  = new this.comentarioModel(comentarioDto)
        return await comentario.save()
    }

    eliminar(id:string){
        return this.comentarioModel.findByIdAndDelete(id)
    }

    async actualizar(id:string, comentarioActualizar : ActualizarComentarioDto){
        return await this.comentarioModel.findByIdAndUpdate(id, comentarioActualizar, { new:true })
    }
}
