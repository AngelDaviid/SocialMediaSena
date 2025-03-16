import { Model } from 'mongoose';
import { Certificado } from './schema/certificado.schema';
import { CrearCertificadoDto } from './dto/certificado.dto';
import { ActualizarCertificadoDto } from './dto/actualizarCertificado.dto';
export declare class CertificadoService {
    private readonly certificadoModel;
    constructor(certificadoModel: Model<Certificado>);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Certificado> & Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Certificado> & Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Certificado, "find", {}>;
    findOne(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Certificado> & Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, Certificado> & Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, Certificado, "findOne", {}>;
    crear(crearCertificado: CrearCertificadoDto): Promise<import("mongoose").Document<unknown, {}, Certificado> & Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, actualizarCertificado: ActualizarCertificadoDto): Promise<(import("mongoose").Document<unknown, {}, Certificado> & Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    eliminar(id: string): Promise<(import("mongoose").Document<unknown, {}, Certificado> & Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
