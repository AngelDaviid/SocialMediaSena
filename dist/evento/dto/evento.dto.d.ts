export declare enum CategoriaEvento {
    CHARLA = "charla",
    HACKATON = "hackaton",
    TALLER = "taller",
    OTROS = "otros"
}
export declare class CrearEventoDto {
    nombre: string;
    descripcion: string;
    categoria: CategoriaEvento;
    fechaHora: string;
    lugar: string;
    inscritos: number;
}
