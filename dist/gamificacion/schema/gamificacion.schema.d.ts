import mongoose from "mongoose";
export declare class Gamificacion {
    tipoLogro: string;
    descripcion: string;
    idUsuario: mongoose.Schema.Types.ObjectId;
}
export declare const GamificacionSchema: mongoose.Schema<Gamificacion, mongoose.Model<Gamificacion, any, any, any, mongoose.Document<unknown, any, Gamificacion> & Gamificacion & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Gamificacion, mongoose.Document<unknown, {}, mongoose.FlatRecord<Gamificacion>> & mongoose.FlatRecord<Gamificacion> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
