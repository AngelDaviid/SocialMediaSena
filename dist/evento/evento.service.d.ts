import { Evento } from './schema/evento.schema';
import { Model } from 'mongoose';
import { CrearEventoDto } from './dto/evento.dto';
import { ActualizarEventoDto } from './dto/actualizarEvento.dto';
export declare class EventoService {
    private readonly eventoModel;
    constructor(eventoModel: Model<Evento>);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Evento> & Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Evento> & Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Evento, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Evento> & Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Evento> & Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Evento, "findOne", {}>;
    crear(crearEventoDto: CrearEventoDto): Promise<import("mongoose").Document<unknown, {}, Evento> & Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, body: ActualizarEventoDto): Promise<(import("mongoose").Document<unknown, {}, Evento> & Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, Evento> & Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
