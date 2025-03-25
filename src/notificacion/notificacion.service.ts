import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notificacion } from './schema/notificacion.schema';
import { Model } from 'mongoose';
import { CrearNotificacionDto } from './dto/notificacion.dto';
import { ActualizarNotificacionDto } from './dto/actualizarNotificacion.dto';

@Injectable()
export class NotificacionService {
    constructor(@InjectModel('Notificacion') private readonly notificacionesModel: Model<Notificacion>) {}

    findOne(id: string) {
        return this.notificacionesModel.findById(id).exec();
    }   

    findAll(){
        return this.notificacionesModel.find().exec();
    }

    async crear(crearNotificacionDto: CrearNotificacionDto){
        const notificacion = new this.notificacionesModel(crearNotificacionDto);
        return notificacion.save();
    }

    async actualizar(id: string, actualizarNotificacionDto: ActualizarNotificacionDto){
        return this.notificacionesModel.findByIdAndUpdate(id, actualizarNotificacionDto, {new: true});
    }

    async eliminar(id:string){
        return this.notificacionesModel.findByIdAndDelete(id);
    }
    
}
