import { Model } from "mongoose";
import { InscripcionEvento } from "./schema/inscripcionevento.schema";
import { InscripcionEventoDto } from "./dto/incripcionEvento.dto";
export declare class InscripcionEventoService {
    private userModel;
    constructor(userModel: Model<InscripcionEvento>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, InscripcionEvento> & InscripcionEvento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, InscripcionEvento> & InscripcionEvento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    crear(inscripcionEventoDto: InscripcionEventoDto): Promise<import("mongoose").Document<unknown, {}, InscripcionEvento> & InscripcionEvento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, inscripcionEventoDto: InscripcionEventoDto): Promise<(import("mongoose").Document<unknown, {}, InscripcionEvento> & InscripcionEvento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, InscripcionEvento> & InscripcionEvento & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
