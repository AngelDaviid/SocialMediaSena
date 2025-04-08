import mongoose from 'mongoose';
export declare class Postulacion {
    iduser: mongoose.Schema.Types.ObjectId;
    ofertaEmpleoId: mongoose.Schema.Types.ObjectId;
    cvAdjunto: string;
    mensajePresentacion: string;
    estado: string;
}
export declare const PostulacionSchema: mongoose.Schema<Postulacion, mongoose.Model<Postulacion, any, any, any, mongoose.Document<unknown, any, Postulacion> & Postulacion & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Postulacion, mongoose.Document<unknown, {}, mongoose.FlatRecord<Postulacion>> & mongoose.FlatRecord<Postulacion> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
