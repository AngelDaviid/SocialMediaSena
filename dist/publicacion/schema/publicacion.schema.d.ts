import mongoose from 'mongoose';
export declare class Publicacion {
    id: mongoose.Schema.Types.ObjectId;
    contenido: string;
    categoria: string;
    numeroReacciones: number;
    numeroComentarios: number;
}
export declare const PublicacionSchema: mongoose.Schema<Publicacion, mongoose.Model<Publicacion, any, any, any, mongoose.Document<unknown, any, Publicacion> & Publicacion & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Publicacion, mongoose.Document<unknown, {}, mongoose.FlatRecord<Publicacion>> & mongoose.FlatRecord<Publicacion> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
