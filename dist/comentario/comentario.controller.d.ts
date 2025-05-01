import { ComentarioService } from './comentario.service';
import { ComentarioDto } from './dto/comentario.dto';
export declare class ComentarioController {
    private readonly comentarioService;
    constructor(comentarioService: ComentarioService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/comentario.schema").Comentario> & import("./schema/comentario.schema").Comentario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/comentario.schema").Comentario> & import("./schema/comentario.schema").Comentario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("./schema/comentario.schema").Comentario> & import("./schema/comentario.schema").Comentario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/comentario.schema").Comentario, "findOne", {}>;
    crear(comentarioDto: ComentarioDto, file: Express.Multer.File): Promise<import("./schema/comentario.schema").Comentario>;
    actualizar(id: string, comentarioActualizar: ComentarioDto): Promise<(import("mongoose").Document<unknown, {}, import("./schema/comentario.schema").Comentario> & import("./schema/comentario.schema").Comentario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/comentario.schema").Comentario> & import("./schema/comentario.schema").Comentario & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
