export declare enum EstadoPostulacion {
    PENDIENTE = "pendiente",
    APROBADO = "aprobado",
    RECHAZADO = "rechazado"
}
export declare class ActualizarPostulacionDto {
    cvAdjunto?: string;
    mensajePresentacion?: string;
    estado?: EstadoPostulacion;
}
