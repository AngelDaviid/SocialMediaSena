import { Notificacion } from './schema/notificacion.schema';
import { Model } from 'mongoose';
import { CrearNotificacionDto } from './dto/notificacion.dto';
import { ActualizarNotificacionDto } from './dto/actualizarNotificacion.dto';
export declare class NotificacionService {
    private readonly notificacionesModel;
    constructor(notificacionesModel: Model<Notificacion>);
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Notificacion> & Notificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Notificacion> & Notificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    crear(crearNotificacionDto: CrearNotificacionDto): Promise<import("mongoose").Document<unknown, {}, Notificacion> & Notificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, actualizarNotificacionDto: ActualizarNotificacionDto): Promise<(import("mongoose").Document<unknown, {}, Notificacion> & Notificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, Notificacion> & Notificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
