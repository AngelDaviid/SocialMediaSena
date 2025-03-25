export declare class Empleo {
    empresa: string;
    cargo: string;
    descripcion: string;
    requisitos: string;
    ubicacion: string;
    estado: string;
}
export declare const EmpleoSchema: import("mongoose").Schema<Empleo, import("mongoose").Model<Empleo, any, any, any, import("mongoose").Document<unknown, any, Empleo> & Empleo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Empleo, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Empleo>> & import("mongoose").FlatRecord<Empleo> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
