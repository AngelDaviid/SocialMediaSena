export declare enum CategoriaPublicacion {
    PREGUNTAS = "preguntas",
    RECURSOS = "recursos",
    EXPERIENCIAS = "experiencias",
    OTROS = "otros"
}
export declare class CrearPublicacionDto {
    id: string;
    contenido: string;
    categoria: CategoriaPublicacion;
    numeroReacciones: number;
    numeroComentarios: number;
}
