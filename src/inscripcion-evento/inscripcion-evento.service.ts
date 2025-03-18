import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { InscripcionEvento } from "./schema/inscripcionevento.schema";
import { InscripcionEventoDto } from "./dto/incripcionEvento.dto";


@Injectable()
export class InscripcionEventoService{
    constructor(@InjectModel('InscripcionEvento') private userModel:Model<InscripcionEvento>){}

    async findAll(){
        return await this.userModel.find().exec();
    }

    async findOne(id: string){
        return await this.userModel.findById(id).exec();
    }

    async crear(inscripcionEventoDto: InscripcionEventoDto){
        const inscripcionEvento = new this.userModel(inscripcionEventoDto);
        return await inscripcionEvento.save();
    }

    async actualizar(id: string, inscripcionEventoDto: InscripcionEventoDto){
        return await this.userModel.findByIdAndUpdate(id, inscripcionEventoDto, {new: true});
    }

    async eliminar(id: string){
        return await this.userModel.findByIdAndDelete(id);
    }
}