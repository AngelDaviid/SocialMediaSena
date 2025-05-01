import { Comentario } from './schema/comentario.schema';
import { Model } from 'mongoose';
import { ComentarioDto } from './dto/comentario.dto';
import { ActualizarComentarioDto } from './dto/actualizarComentario.dto';
export declare class ComentarioService {
    private comentarioModel;
    constructor(comentarioModel: Model<Comentario>);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Comentario> & Comentario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Comentario> & Comentario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Comentario> & Comentario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Comentario, "findOne", {}>;
    crear(comentarioDto: ComentarioDto): Promise<Comentario>;
    eliminar(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Comentario> & Comentario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Comentario> & Comentario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Comentario, "findOneAndDelete", {}>;
    actualizar(id: string, comentarioActualizar: ActualizarComentarioDto): Promise<(import("mongoose").Document<unknown, {}, Comentario> & Comentario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
