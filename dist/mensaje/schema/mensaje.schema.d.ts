import mongoose from "mongoose";
export declare class Mensaje {
    idUser: mongoose.Schema.Types.ObjectId;
    destinatarioId: mongoose.Schema.Types.ObjectId;
    contenido: string;
    archivo: string;
}
export declare const MensajeSchema: mongoose.Schema<Mensaje, mongoose.Model<Mensaje, any, any, any, mongoose.Document<unknown, any, Mensaje> & Mensaje & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Mensaje, mongoose.Document<unknown, {}, mongoose.FlatRecord<Mensaje>> & mongoose.FlatRecord<Mensaje> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
