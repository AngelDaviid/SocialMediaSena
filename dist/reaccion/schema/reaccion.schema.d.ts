import { Schema as MongooseSchema } from "mongoose";
export declare class Reaccion {
    entidadId: string;
    tipoEntidad: string;
    tipoReaccion: string;
}
export declare const ReaccionSchema: MongooseSchema<Reaccion, import("mongoose").Model<Reaccion, any, any, any, import("mongoose").Document<unknown, any, Reaccion> & Reaccion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reaccion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Reaccion>> & import("mongoose").FlatRecord<Reaccion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
