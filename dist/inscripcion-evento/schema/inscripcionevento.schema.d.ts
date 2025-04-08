import mongoose from "mongoose";
export declare class InscripcionEvento {
    iduser: mongoose.Schema.Types.ObjectId;
    eventoId: mongoose.Schema.Types.ObjectId;
    estado: string;
    tipoinscripcion: string;
}
export declare const InscripcionEventoSchema: mongoose.Schema<InscripcionEvento, mongoose.Model<InscripcionEvento, any, any, any, mongoose.Document<unknown, any, InscripcionEvento> & InscripcionEvento & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, InscripcionEvento, mongoose.Document<unknown, {}, mongoose.FlatRecord<InscripcionEvento>> & mongoose.FlatRecord<InscripcionEvento> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
