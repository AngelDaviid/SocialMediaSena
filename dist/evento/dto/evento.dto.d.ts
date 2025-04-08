import { UserDocument } from 'src/users/schema/user.schema';
export declare enum CategoriaEvento {
    CHARLA = "charla",
    HACKATON = "hackaton",
    TALLER = "taller",
    OTROS = "otros"
}
export declare class CrearEventoDto {
    idUsuario: UserDocument;
    nombre: string;
    descripcion: string;
    categoria: CategoriaEvento;
    fechaHora: string;
    lugar: string;
    inscritos: number;
}
