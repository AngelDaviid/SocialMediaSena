import { Model } from "mongoose";
import { Mensaje } from "./schema/mensaje.schema";
import { CrearMensajeDto } from "./dto/mensaje.dto";
import { ActualizarMensajeDto } from "./dto/ActualizarMenaje.dto";
import { Conversation } from "src/conversations/schema/conversatios.schema";
export declare class MensajeService {
    private mensajeModel;
    private conversationModel;
    constructor(mensajeModel: Model<Mensaje>, conversationModel: Model<Conversation>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Mensaje> & Mensaje & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Mensaje> & Mensaje & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    findOneByConversationId(conversationId: string): Promise<(import("mongoose").Document<unknown, {}, Mensaje> & Mensaje & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    crear(MensajeDto: CrearMensajeDto & {
        conversationId: string;
    }): Promise<Mensaje>;
    actualizar(id: string, mensajeDto: ActualizarMensajeDto): Promise<(import("mongoose").Document<unknown, {}, Mensaje> & Mensaje & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, Mensaje> & Mensaje & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    marcarComoLeido(messageId: string, idUser: string): Promise<(import("mongoose").Document<unknown, {}, Mensaje> & Mensaje & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    getMensajesPorConversacion(conversationId: string, limit?: number, skip?: number): Promise<(import("mongoose").Document<unknown, {}, Mensaje> & Mensaje & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
