export declare class Evento {
    nombre: string;
    descripion: string;
    categoria: string;
    fechaHora: string;
    lugar: string;
    inscritos: number;
}
export declare const EventoSchema: import("mongoose").Schema<Evento, import("mongoose").Model<Evento, any, any, any, import("mongoose").Document<unknown, any, Evento> & Evento & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Evento, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Evento>> & import("mongoose").FlatRecord<Evento> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
