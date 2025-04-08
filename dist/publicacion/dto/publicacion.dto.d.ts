import { UserDocument } from 'src/users/schema/user.schema';
export declare enum CategoriaPublicacion {
    PREGUNTAS = "preguntas",
    RECURSOS = "recursos",
    EXPERIENCIAS = "experiencias",
    OTROS = "otros"
}
export declare class CrearPublicacionDto {
    id: UserDocument;
    contenido: string;
    categoria: CategoriaPublicacion;
    numeroReacciones: number;
    numeroComentarios: number;
}
