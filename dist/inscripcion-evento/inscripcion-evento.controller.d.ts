import { InscripcionEventoService } from "./inscripcion-evento.service";
import { InscripcionEventoDto } from "./dto/incripcionEvento.dto";
export declare class InscripcionEventoController {
    private readonly inscripcioneventoService;
    constructor(inscripcioneventoService: InscripcionEventoService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/inscripcionevento.schema").InscripcionEvento> & import("./schema/inscripcionevento.schema").InscripcionEvento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/inscripcionevento.schema").InscripcionEvento> & import("./schema/inscripcionevento.schema").InscripcionEvento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    crear(body: InscripcionEventoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/inscripcionevento.schema").InscripcionEvento> & import("./schema/inscripcionevento.schema").InscripcionEvento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, body: InscripcionEventoDto): Promise<void>;
    eliminar(id: string): Promise<void>;
}
