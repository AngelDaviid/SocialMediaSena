import { UserDocument } from 'src/users/schema/user.schema';
export declare enum EstadoEmpleo {
    ACTIVO = "activo",
    CERRADO = "cerrado"
}
export declare class CrearEmpleoDto {
    iduser: UserDocument;
    empresa: string;
    cargo: string;
    descripcion: string;
    requisitos: string;
    ubicacion: string;
    estado: EstadoEmpleo;
}
