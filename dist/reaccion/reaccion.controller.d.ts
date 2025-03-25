import { ReaccionService } from './reaccion.service';
import { ReaccionDto } from './dto/reaccion.dto';
export declare class ReaccionController {
    private readonly reaccionService;
    constructor(reaccionService: ReaccionService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/reaccion.schema").Reaccion> & import("./schema/reaccion.schema").Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/reaccion.schema").Reaccion> & import("./schema/reaccion.schema").Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/reaccion.schema").Reaccion, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/reaccion.schema").Reaccion> & import("./schema/reaccion.schema").Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    crear(crearReaccion: ReaccionDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/reaccion.schema").Reaccion> & import("./schema/reaccion.schema").Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, body: ReaccionDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/reaccion.schema").Reaccion> & import("./schema/reaccion.schema").Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/reaccion.schema").Reaccion> & import("./schema/reaccion.schema").Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
