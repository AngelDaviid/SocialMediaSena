import { Schema as MongooseSchema } from "mongoose";
export declare class Comentario {
    id: string;
    publicacionId: string;
    contenido: string;
}
export declare const ComentarioSchema: MongooseSchema<Comentario, import("mongoose").Model<Comentario, any, any, any, import("mongoose").Document<unknown, any, Comentario> & Comentario & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Comentario, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Comentario>> & import("mongoose").FlatRecord<Comentario> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
