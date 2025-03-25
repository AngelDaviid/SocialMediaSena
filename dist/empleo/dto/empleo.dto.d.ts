export declare enum EstadoEmpleo {
    ACTIVO = "activo",
    CERRADO = "cerrado"
}
export declare class CrearEmpleoDto {
    id: string;
    empresa: string;
    cargo: string;
    descripcion: string;
    requisitos: string;
    ubicacion: string;
    estado: EstadoEmpleo;
}
