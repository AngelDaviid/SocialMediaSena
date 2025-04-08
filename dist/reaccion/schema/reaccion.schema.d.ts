import mongoose from "mongoose";
export declare class Reaccion {
    publicacionId?: mongoose.Types.ObjectId;
    ComentarioId?: mongoose.Types.ObjectId;
    tipoReaccion: string;
}
export declare const ReaccionSchema: mongoose.Schema<Reaccion, mongoose.Model<Reaccion, any, any, any, mongoose.Document<unknown, any, Reaccion> & Reaccion & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Reaccion, mongoose.Document<unknown, {}, mongoose.FlatRecord<Reaccion>> & mongoose.FlatRecord<Reaccion> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
