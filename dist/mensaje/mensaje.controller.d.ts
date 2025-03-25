import { MensajeService } from "./mensaje.service";
import { CrearMensajeDto } from "./dto/mensaje.dto";
import { ActualizarMensajeDto } from "./dto/ActualizarMenaje.dto";
export declare class MensajeController {
    private readonly mensajeService;
    constructor(mensajeService: MensajeService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/mensaje.schema").Mensaje> & import("./schema/mensaje.schema").Mensaje & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/mensaje.schema").Mensaje> & import("./schema/mensaje.schema").Mensaje & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    crear(body: CrearMensajeDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/mensaje.schema").Mensaje> & import("./schema/mensaje.schema").Mensaje & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualiza(id: string, body: ActualizarMensajeDto): Promise<void>;
    eliminar(id: string): Promise<void>;
}
