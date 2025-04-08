import mongoose from 'mongoose';
export declare class Certificado {
    IdUser: mongoose.Schema.Types.ObjectId;
    eventoOCursoId: mongoose.Schema.Types.ObjectId;
    fechaEmision: string;
    enlaceDescarga: string;
}
export declare const CertificadoSchema: mongoose.Schema<Certificado, mongoose.Model<Certificado, any, any, any, mongoose.Document<unknown, any, Certificado> & Certificado & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Certificado, mongoose.Document<unknown, {}, mongoose.FlatRecord<Certificado>> & mongoose.FlatRecord<Certificado> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
