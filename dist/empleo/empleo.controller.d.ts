import { EmpleoService } from './empleo.service';
import { CrearEmpleoDto } from './dto/empleo.dto';
import { ActualizarEmpleoDto } from './dto/actualizarEmpleo.dto';
export declare class EmpleoController {
    private readonly empleoService;
    constructor(empleoService: EmpleoService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/empleo.schema").Empleo> & import("./schema/empleo.schema").Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/empleo.schema").Empleo> & import("./schema/empleo.schema").Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/empleo.schema").Empleo, "find", {}>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/empleo.schema").Empleo> & import("./schema/empleo.schema").Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    crear(body: CrearEmpleoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/empleo.schema").Empleo> & import("./schema/empleo.schema").Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, actualizarEmpleo: ActualizarEmpleoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/empleo.schema").Empleo> & import("./schema/empleo.schema").Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/empleo.schema").Empleo> & import("./schema/empleo.schema").Empleo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
