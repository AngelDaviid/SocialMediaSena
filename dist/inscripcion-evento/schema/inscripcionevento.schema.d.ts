export declare class InscripcionEvento {
    eventoId: string;
    estado: string;
    tipoinscripcion: string;
}
export declare const InscripcionEventoSchema: import("mongoose").Schema<InscripcionEvento, import("mongoose").Model<InscripcionEvento, any, any, any, import("mongoose").Document<unknown, any, InscripcionEvento> & InscripcionEvento & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, InscripcionEvento, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<InscripcionEvento>> & import("mongoose").FlatRecord<InscripcionEvento> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
