import { Model } from "mongoose";
import { Mensaje } from "./schema/mensaje.schema";
import { CrearMensajeDto } from "./dto/mensaje.dto";
import { ActualizarMensajeDto } from "./dto/ActualizarMenaje.dto";
export declare class MensajeService {
    private userModel;
    constructor(userModel: Model<Mensaje>);
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
    crear(mensajeDto: CrearMensajeDto): Promise<Mensaje>;
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
}
