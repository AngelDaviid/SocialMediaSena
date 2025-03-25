export declare enum EstadoEmpleo {
    ACTIVO = "activo",
    CERRADO = "cerrado"
}
export declare class ActualizarEmpleoDto {
    empresa: string;
    cargo: string;
    descripcion: string;
    requisitos: string;
    ubicacion?: string;
    estado?: EstadoEmpleo;
}
