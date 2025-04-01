import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Reaccion } from './schema/reaccion.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ReaccionDto } from './dto/reaccion.dto';

@Injectable()
export class ReaccionService {
    constructor(@InjectModel('Reaccion') private reaccionModel : Model<Reaccion>){}

    findAll(){
        return this.reaccionModel.find()
    }

    findOne(id:string){
        return this.reaccionModel.findById(id)
    }

    async crear(crearReaccionDto: ReaccionDto){
        const reaccion = new this.reaccionModel(crearReaccionDto)
        return reaccion.save()
    }

    async actualizar(id:string, body: ReaccionDto){
        return await this.reaccionModel.findByIdAndUpdate(id, body, { new:true })
    }

    async eliminar(id:string){
        return await this.reaccionModel.findByIdAndDelete(id)
    }

    async agregarReaccion(entidadId: string, tipoEntidad: 'publicacion' | 'comentario', tipoReaccion: string) {
        const reaccion = new this.reaccionModel({ entidadId, tipoEntidad, tipoReaccion });
        return reaccion.save();
    }

}
