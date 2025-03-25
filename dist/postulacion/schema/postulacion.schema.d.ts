export declare class Postulacion {
    ofertaEmpleoId: string;
    cvAdjunto: string;
    mensajePresentacion: string;
    estado: string;
}
export declare const PostulacionSchema: import("mongoose").Schema<Postulacion, import("mongoose").Model<Postulacion, any, any, any, import("mongoose").Document<unknown, any, Postulacion> & Postulacion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Postulacion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Postulacion>> & import("mongoose").FlatRecord<Postulacion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
