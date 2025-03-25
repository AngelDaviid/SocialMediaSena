import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Evento } from './schema/evento.schema';
import { Model } from 'mongoose'
import { CrearEventoDto } from './dto/evento.dto';
import { ActualizarEventoDto } from './dto/actualizarEvento.dto';

@Injectable()
export class EventoService {
    constructor(@InjectModel('Evento') private readonly eventoModel: Model<Evento>){}

    findAll(){
        return this.eventoModel.find()
    }

    findOne(id:string ){
        return this.eventoModel.findById(id)
    }

    async crear(crearEventoDto: CrearEventoDto){
        const evento = new this.eventoModel(crearEventoDto)
        return await evento.save();
    }

    async actualizar(id:string, body: ActualizarEventoDto){
        return await this.eventoModel.findByIdAndUpdate(id, body, { new:true })
    }

    async eliminar (id:string){
        return await this.eventoModel.findByIdAndDelete(id)
    }

}
