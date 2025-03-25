import { Model } from "mongoose";
import { Gamificacion } from "./schema/gamificacion.schema";
import { GamificacionDto } from "./dto/gamificacion.dto";
import { ActualizarGamificacionDto } from "./dto/ActualizarGamificacion.dto";
export declare class GamificacionService {
    private userGamificacion;
    constructor(userGamificacion: Model<Gamificacion>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Gamificacion> & Gamificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Gamificacion> & Gamificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    crear(gamificacionDto: GamificacionDto): Promise<Gamificacion>;
    actualizar(id: string, gamificacionDto: ActualizarGamificacionDto): Promise<(import("mongoose").Document<unknown, {}, Gamificacion> & Gamificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, Gamificacion> & Gamificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
