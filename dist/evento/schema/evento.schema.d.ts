import mongoose from 'mongoose';
export declare class Evento {
    idUsuario: mongoose.Schema.Types.ObjectId;
    nombre: string;
    descripion: string;
    categoria: string;
    fechaHora: string;
    lugar: string;
    inscritos: number;
}
export declare const EventoSchema: mongoose.Schema<Evento, mongoose.Model<Evento, any, any, any, mongoose.Document<unknown, any, Evento> & Evento & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Evento, mongoose.Document<unknown, {}, mongoose.FlatRecord<Evento>> & mongoose.FlatRecord<Evento> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
