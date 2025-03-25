import { Publicacion } from './schema/publicacion.schema';
import { Model } from 'mongoose';
import { CrearPublicacionDto } from './dto/publicacion.dto';
import { ActualizarPublicacionDto } from './dto/ActualizarPublicacion.dto';
export declare class PublicacionService {
    private userModel;
    constructor(userModel: Model<Publicacion>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Publicacion> & Publicacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Publicacion> & Publicacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    crear(publicacionDto: CrearPublicacionDto): Promise<import("mongoose").Document<unknown, {}, Publicacion> & Publicacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, publicacionDto: ActualizarPublicacionDto): Promise<(import("mongoose").Document<unknown, {}, Publicacion> & Publicacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, Publicacion> & Publicacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
