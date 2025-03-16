import { NotificacionService } from './notificacion.service';
import { CrearNotificacionDto } from './dto/notificacion.dto';
import { ActualizarNotificacionDto } from './dto/actualizarNotificacion.dto';
export declare class NotificacionController {
    private readonly notificacionService;
    constructor(notificacionService: NotificacionService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/notificacion.schema").Notificacion> & import("./schema/notificacion.schema").Notificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/notificacion.schema").Notificacion> & import("./schema/notificacion.schema").Notificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    crear(crearNotificacionDto: CrearNotificacionDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/notificacion.schema").Notificacion> & import("./schema/notificacion.schema").Notificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, body: ActualizarNotificacionDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/notificacion.schema").Notificacion> & import("./schema/notificacion.schema").Notificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    eliminar(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/notificacion.schema").Notificacion> & import("./schema/notificacion.schema").Notificacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
