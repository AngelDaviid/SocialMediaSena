import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Mensaje } from "./schema/mensaje.schema";
import { InjectModel } from "@nestjs/mongoose";
import { CrearMensajeDto } from "./dto/mensaje.dto";
import { ActualizarMensajeDto } from "./dto/ActualizarMenaje.dto";
import { Conversation } from "src/conversations/schema/conversatios.schema";



@Injectable()
export class MensajeService{
    constructor(
        @InjectModel('Mensaje') private mensajeModel: Model<Mensaje>,
        @InjectModel(Conversation.name) private conversationModel: Model<Conversation>,
){}

    async findAll(){
        return await this.mensajeModel.find().exec();
    }

    async findOne(id: string){
        return await this.mensajeModel.findById(id).exec();
    }

    async findOneByConversationId(conversationId: string){
        return this.mensajeModel.find({ conversationId}).sort({ createdAt: -1 }).exec();
    }

    async crear(MensajeDto: CrearMensajeDto & { conversationId: string}): Promise<Mensaje> {
        const nuevoMensaje = new this.mensajeModel(MensajeDto);
        const mensajeGuardado = await nuevoMensaje.save();

        //actualizar la conversacion con el último mensaje

        await this.conversationModel.findByIdAndUpdate(MensajeDto.conversationId, {
            lastMessage: mensajeGuardado._id,
            lastUpdatedBy: MensajeDto.idUser,
            updatedAt: new Date()
        })

        return mensajeGuardado;
    }

    async actualizar(id: string, mensajeDto: ActualizarMensajeDto){
        return await this.mensajeModel.findByIdAndUpdate(id, mensajeDto, {new: true});
    }

    async eliminar(id: string){
        return await this.mensajeModel.findByIdAndDelete(id);
    }

    async marcarComoLeido(messageId: string, idUser: string){
        return this.mensajeModel.findByIdAndUpdate(messageId, {
            isRead: true, readAt: new Date(),
        });
    }

    async getMensajesPorConversacion(conversationId: string, limit = 20, skip = 0){
        return this.mensajeModel.find({ conversationId})
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .exec();
    }

}    