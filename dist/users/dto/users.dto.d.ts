export declare enum RolUsuario {
    ESTUDIANTE = "Estudiante",
    EGRESADO = "Egresado",
    INSTRUCTOR = "Instructor",
    EMPRESA = "Empresa"
}
export declare class CrearUsuarioDto {
    username: string;
    nombre: string;
    Email: string;
    password: string;
    rol: RolUsuario;
    fotoPerfil?: string;
    biografia?: string;
    habilidadesCursos: string[];
    experienciaLaboral: string[];
}
