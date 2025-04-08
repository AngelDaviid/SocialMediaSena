import mongoose from "mongoose";
export declare class Comentario {
    id: mongoose.Schema.Types.ObjectId;
    publicacionId: mongoose.Schema.Types.ObjectId;
    contenido: string;
}
export declare const ComentarioSchema: mongoose.Schema<Comentario, mongoose.Model<Comentario, any, any, any, mongoose.Document<unknown, any, Comentario> & Comentario & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comentario, mongoose.Document<unknown, {}, mongoose.FlatRecord<Comentario>> & mongoose.FlatRecord<Comentario> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
