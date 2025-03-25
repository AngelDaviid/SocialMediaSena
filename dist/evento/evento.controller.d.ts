import { EventoService } from './evento.service';
import { CrearEventoDto } from './dto/evento.dto';
import { ActualizarEventoDto } from './dto/actualizarEvento.dto';
export declare class EventoController {
    private readonly eventoService;
    constructor(eventoService: EventoService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/evento.schema").Evento> & import("./schema/evento.schema").Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/evento.schema").Evento> & import("./schema/evento.schema").Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/evento.schema").Evento, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/evento.schema").Evento> & import("./schema/evento.schema").Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schema/evento.schema").Evento> & import("./schema/evento.schema").Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/evento.schema").Evento, "findOne", {}>;
    crear(body: CrearEventoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/evento.schema").Evento> & import("./schema/evento.schema").Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, actualizarEventoDto: ActualizarEventoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/evento.schema").Evento> & import("./schema/evento.schema").Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    eliminar(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/evento.schema").Evento> & import("./schema/evento.schema").Evento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
