import { Empleo } from 'src/empleo/schema/empleo.schema';
import { UserDocument } from 'src/users/schema/user.schema';
export declare enum EstadoPostulacion {
    PENDIENTE = "pendiente",
    APROBADO = "aprobado",
    RECHAZADO = "rechazado"
}
export declare class CrearPostulacionDto {
    iduser: UserDocument;
    ofertaEmpleoId: Empleo;
    cvAdjunto: string;
    mensajePresentacion: string;
    estado: EstadoPostulacion;
}
