import mongoose from 'mongoose';
export declare class Empleo {
    iduser: mongoose.Schema.Types.ObjectId;
    empresa: string;
    cargo: string;
    descripcion: string;
    requisitos: string;
    ubicacion: string;
    estado: string;
}
export declare const EmpleoSchema: mongoose.Schema<Empleo, mongoose.Model<Empleo, any, any, any, mongoose.Document<unknown, any, Empleo> & Empleo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Empleo, mongoose.Document<unknown, {}, mongoose.FlatRecord<Empleo>> & mongoose.FlatRecord<Empleo> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
