export declare enum TipoReaccion {
    ME_GUSTA = "Me gusta",
    INTERESANTE = "Interesante",
    UTIL = "Util"
}
export declare class ReaccionDto {
    publicacionOComentarioId?: string;
    tipoReaccion?: TipoReaccion;
}
