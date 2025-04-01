import { IsNotEmpty, IsString, IsEmail, IsEnum, IsArray } from 'class-validator';

export enum RolUsuario {
  ESTUDIANTE = 'Estudiante',
  EGRESADO = 'Egresado',
  INSTRUCTOR = 'Instructor',
  EMPRESA = 'Empresa',
}

export class CrearUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @IsNotEmpty()
  Email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(RolUsuario)
  @IsNotEmpty()
  rol: RolUsuario;

  @IsString()
  fotoPerfil?: string;

  @IsString()
  biografia?: string;

  @IsArray()
  @IsString({ each: true })
  habilidadesCursos: string[];

  @IsArray()
  @IsString({ each: true })
  experienciaLaboral: string[];
}
