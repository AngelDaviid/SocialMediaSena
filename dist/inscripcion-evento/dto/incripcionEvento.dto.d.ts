export declare enum EstadoInscripcion {
    PENDIENTE = "pendiente",
    CONFIRMADA = "confirmada",
    CANCELADA = "cancelada"
}
export declare enum TipoInscripcion {
    CURSO_CORTO = "Curso Corto",
    SEMILLERO = "Semillero",
    SENNOVA = "SENNOVA",
    TECNOLOGO = "Tecnologo"
}
export declare class InscripcionEventoDto {
    eventoId: string;
    estado: string;
    tipoinscripcion: string;
}
