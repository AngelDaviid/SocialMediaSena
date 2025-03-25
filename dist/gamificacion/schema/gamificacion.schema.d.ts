export declare class Gamificacion {
    tipoLogro: string;
    descripcion: string;
    idUsuario: string;
}
export declare const GamificacionSchema: import("mongoose").Schema<Gamificacion, import("mongoose").Model<Gamificacion, any, any, any, import("mongoose").Document<unknown, any, Gamificacion> & Gamificacion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Gamificacion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Gamificacion>> & import("mongoose").FlatRecord<Gamificacion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
