import { Empleo } from './schema/empleo.schema';
import { Model } from 'mongoose';
import { CrearEmpleoDto } from './dto/empleo.dto';
import { ActualizarEmpleoDto } from './dto/actualizarEmpleo.dto';
export declare class EmpleoService {
    private readonly empleoModel;
    constructor(empleoModel: Model<Empleo>);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Empleo> & Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Empleo> & Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Empleo, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Empleo> & Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Empleo> & Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Empleo, "findOne", {}>;
    crear(crearEmpleoDto: CrearEmpleoDto): Promise<import("mongoose").Document<unknown, {}, Empleo> & Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, body: ActualizarEmpleoDto): Promise<(import("mongoose").Document<unknown, {}, Empleo> & Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, Empleo> & Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
