import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Gamificacion } from "./schema/gamificacion.schema";
import { GamificacionDto } from "./dto/gamificacion.dto";
import { ActualizarGamificacionDto } from "./dto/ActualizarGamificacion.dto";


@Injectable()
export class GamificacionService{
    constructor(@InjectModel('Gamificacion') private userGamificacion: Model<Gamificacion>){}

    async findAll(){
        return await this.userGamificacion.find().exec();
    }

    async findOne(id: string){
        return await this.userGamificacion.findById(id).exec();
    }

    async crear(gamificacionDto: GamificacionDto): Promise<Gamificacion>{
        const gamificacion = new this.userGamificacion(gamificacionDto);
        return await gamificacion.save();
    }

    async actualizar(id: string, gamificacionDto: ActualizarGamificacionDto){
        return await this.userGamificacion.findByIdAndUpdate (id,gamificacionDto, {new: true});
    }

    async eliminar(id: string){
        return await this.userGamificacion.findByIdAndDelete(id);
    }
}