export declare enum TipoNotificacion {
    NUEVA_PUBLICACION = "nueva publicaci\u00F3n",
    EMPLEO = "empleo",
    MENSAJE = "mensaje",
    OTROS = "otros"
}
export declare class ActualizarNotificacionDto {
    mensaje?: string;
    tipo?: TipoNotificacion;
}
