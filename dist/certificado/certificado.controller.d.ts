import { CertificadoService } from './certificado.service';
import { CrearCertificadoDto } from './dto/certificado.dto';
import { ActualizarCertificadoDto } from './dto/actualizarCertificado.dto';
export declare class CertificadoController {
    private readonly certificadoService;
    constructor(certificadoService: CertificadoService);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/certificado.schema").Certificado> & import("./schema/certificado.schema").Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/certificado.schema").Certificado> & import("./schema/certificado.schema").Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/certificado.schema").Certificado, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/certificado.schema").Certificado> & import("./schema/certificado.schema").Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    crear(body: CrearCertificadoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/certificado.schema").Certificado> & import("./schema/certificado.schema").Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    actualizar(id: string, actualizarCertificado: ActualizarCertificadoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/certificado.schema").Certificado> & import("./schema/certificado.schema").Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    eliminar(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/certificado.schema").Certificado> & import("./schema/certificado.schema").Certificado & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
