import { PostulacionService } from './postulacion.service';
import { CrearPostulacionDto } from './dto/postulacion.dto';
import { ActualizarPostulacionDto } from './dto/actualizarPostulacion.dto';
export declare class PostulacionController {
    readonly postulacionService: PostulacionService;
    constructor(postulacionService: PostulacionService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/postulacion.schema").Postulacion> & import("./schema/postulacion.schema").Postulacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/postulacion.schema").Postulacion> & import("./schema/postulacion.schema").Postulacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    crear(body: CrearPostulacionDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/postulacion.schema").Postulacion> & import("./schema/postulacion.schema").Postulacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, body: ActualizarPostulacionDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/postulacion.schema").Postulacion> & import("./schema/postulacion.schema").Postulacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    eliminar(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/postulacion.schema").Postulacion> & import("./schema/postulacion.schema").Postulacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
