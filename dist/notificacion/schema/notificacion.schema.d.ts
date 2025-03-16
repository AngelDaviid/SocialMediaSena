export declare class Notificacion {
    mensaje: string;
    tipo: string;
}
export declare const NotificacionSchema: import("mongoose").Schema<Notificacion, import("mongoose").Model<Notificacion, any, any, any, import("mongoose").Document<unknown, any, Notificacion> & Notificacion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Notificacion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Notificacion>> & import("mongoose").FlatRecord<Notificacion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
