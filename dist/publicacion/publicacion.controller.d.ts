import { PublicacionService } from './publicacion.service';
import { CrearPublicacionDto } from './dto/publicacion.dto';
import { ActualizarPublicacionDto } from './dto/ActualizarPublicacion.dto';
export declare class PublicacionController {
    private readonly publicacionService;
    constructor(publicacionService: PublicacionService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/publicacion.schema").Publicacion> & import("./schema/publicacion.schema").Publicacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/publicacion.schema").Publicacion> & import("./schema/publicacion.schema").Publicacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    Crear(body: CrearPublicacionDto): Promise<(import("mongoose").Document<unknown, {}, import("./schema/publicacion.schema").Publicacion> & import("./schema/publicacion.schema").Publicacion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | {
        error: string;
    }>;
    actualiza(id: string, body: ActualizarPublicacionDto): Promise<void>;
    eliminar(id: string): Promise<void>;
}
