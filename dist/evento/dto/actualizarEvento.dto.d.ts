export declare enum CategoriaEvento {
    CHARLA = "charla",
    HACKATON = "hackat\u00F3n",
    TALLER = "taller",
    OTROS = "otros"
}
export declare class ActualizarEventoDto {
    nombre?: string;
    descripcion?: string;
    categoria?: CategoriaEvento;
    fechaHora?: string;
    lugar?: string;
    inscritos?: number;
}
