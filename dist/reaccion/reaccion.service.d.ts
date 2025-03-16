import { Model } from 'mongoose';
import { Reaccion } from './schema/reaccion.schema';
import { ReaccionDto } from './dto/reaccion.dto';
export declare class ReaccionService {
    private reaccionModel;
    constructor(reaccionModel: Model<Reaccion>);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Reaccion> & Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Reaccion> & Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Reaccion, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Reaccion> & Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Reaccion> & Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Reaccion, "findOne", {}>;
    crear(crearReaccionDto: ReaccionDto): Promise<import("mongoose").Document<unknown, {}, Reaccion> & Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, body: ReaccionDto): Promise<(import("mongoose").Document<unknown, {}, Reaccion> & Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, Reaccion> & Reaccion & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
