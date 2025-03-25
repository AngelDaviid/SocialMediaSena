import { GamificacionService } from "./gamificacion.service";
import { GamificacionDto } from "./dto/gamificacion.dto";
export declare class GamificacionController {
    private readonly gamificacionService;
    constructor(gamificacionService: GamificacionService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/gamificacion.schema").Gamificacion> & import("./schema/gamificacion.schema").Gamificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/gamificacion.schema").Gamificacion> & import("./schema/gamificacion.schema").Gamificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    crear(body: GamificacionDto): Promise<import("./schema/gamificacion.schema").Gamificacion>;
    actualizar(id: string, body: GamificacionDto): Promise<void>;
    eliminar(id: string): Promise<void>;
}
