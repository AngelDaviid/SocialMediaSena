export declare class Certificado {
    eventoOCursoId: string;
    fechaEmision: string;
    enlaceDescarga: string;
}
export declare const CertificadoSchema: import("mongoose").Schema<Certificado, import("mongoose").Model<Certificado, any, any, any, import("mongoose").Document<unknown, any, Certificado> & Certificado & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Certificado, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Certificado>> & import("mongoose").FlatRecord<Certificado> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
