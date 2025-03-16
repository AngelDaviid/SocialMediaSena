export declare enum EstadoPostulacion {
    PENDIENTE = "pendiente",
    APROBADO = "aprobado",
    RECHAZADO = "rechazado"
}
export declare class CrearPostulacionDto {
    ofertaEmpleoId: string;
    cvAdjunto: string;
    mensajePresentacion: string;
    estado: EstadoPostulacion;
}
