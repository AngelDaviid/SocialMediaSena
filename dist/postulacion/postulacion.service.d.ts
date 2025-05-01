import { Model } from 'mongoose';
import { Postulacion } from './schema/postulacion.schema';
import { CrearPostulacionDto } from './dto/postulacion.dto';
import { ActualizarPostulacionDto } from './dto/actualizarPostulacion.dto';
export declare class PostulacionService {
    private readonly postulacionModel;
    constructor(postulacionModel: Model<Postulacion>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Postulacion> & Postulacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Postulacion> & Postulacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    crear(crearPostulacionDto: CrearPostulacionDto): Promise<Postulacion>;
    actualizar(id: string, actualizarPostulacion: ActualizarPostulacionDto): Promise<(import("mongoose").Document<unknown, {}, Postulacion> & Postulacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, Postulacion> & Postulacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
