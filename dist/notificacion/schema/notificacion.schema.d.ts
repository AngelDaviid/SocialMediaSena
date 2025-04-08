import mongoose from 'mongoose';
export declare class Notificacion {
    iduser: mongoose.Schema.Types.ObjectId;
    idreaccion: mongoose.Schema.Types.ObjectId;
    idpublicacion: mongoose.Schema.Types.ObjectId;
    Idmensaje: mongoose.Schema.Types.ObjectId;
    idevento: mongoose.Schema.Types.ObjectId;
    idcomentario: mongoose.Schema.Types.ObjectId;
    idempleo: mongoose.Schema.Types.ObjectId;
    mensaje: string;
    tipo: string;
}
export declare const NotificacionSchema: mongoose.Schema<Notificacion, mongoose.Model<Notificacion, any, any, any, mongoose.Document<unknown, any, Notificacion> & Notificacion & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Notificacion, mongoose.Document<unknown, {}, mongoose.FlatRecord<Notificacion>> & mongoose.FlatRecord<Notificacion> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
