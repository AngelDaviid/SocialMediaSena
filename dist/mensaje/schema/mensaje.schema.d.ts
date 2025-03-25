export declare class Mensaje {
    idUser: string;
    remitenteId: string;
    destinatarioId: string;
    contenido: string;
}
export declare const MensajeSchema: import("mongoose").Schema<Mensaje, import("mongoose").Model<Mensaje, any, any, any, import("mongoose").Document<unknown, any, Mensaje> & Mensaje & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Mensaje, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Mensaje>> & import("mongoose").FlatRecord<Mensaje> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
