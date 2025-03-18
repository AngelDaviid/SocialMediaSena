import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Mensaje } from "./schema/mensaje.schema";
import { InjectModel } from "@nestjs/mongoose";
import { CrearMensajeDto } from "./dto/mensaje.dto";
import { ActualizarMensajeDto } from "./dto/ActualizarMenaje.dto";



@Injectable()
export class MensajeService{
    constructor(@InjectModel('Mensaje') private userModel: Model<Mensaje>){}

    async findAll(){
        return await this.userModel.find().exec();
    }

    async findOne(id: string){
        return await this.userModel.findById(id).exec();
    }

    async crear(mensajeDto: CrearMensajeDto){
        const mensaje = new this.userModel(mensajeDto);
        return await mensaje.save();
    }

    async actualizar(id: string, mensajeDto: ActualizarMensajeDto){
        return await this.userModel.findByIdAndUpdate(id, mensajeDto, {new: true});
    }

    async eliminar(id: string){
        return await this.userModel.findByIdAndDelete(id);
    }

}