export declare class Publicacion {
    id: string;
    contenido: string;
    categoria: string;
    numeroReacciones: number;
    numeroComentarios: number;
}
export declare const PublicacionSchema: import("mongoose").Schema<Publicacion, import("mongoose").Model<Publicacion, any, any, any, import("mongoose").Document<unknown, any, Publicacion> & Publicacion & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Publicacion, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Publicacion>> & import("mongoose").FlatRecord<Publicacion> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
