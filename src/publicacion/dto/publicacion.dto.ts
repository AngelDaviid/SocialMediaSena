import { IsString, IsNotEmpty, IsEnum, IsNumber } from 'class-validator';

export enum CategoriaPublicacion {
  PREGUNTAS = 'preguntas',
  RECURSOS = 'recursos',
  EXPERIENCIAS = 'experiencias',
  OTROS = 'otros',
}

export class CrearPublicacionDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  
  @IsString()
  @IsNotEmpty()
  contenido: string;

  @IsEnum(CategoriaPublicacion)
  @IsNotEmpty()
  categoria: CategoriaPublicacion;

  /*@IsDate()
  @IsNotEmpty()
  fechaCreacion: Date;*/

  @IsNumber()
  @IsNotEmpty()
  numeroReacciones: number;

  @IsNumber()
  @IsNotEmpty()
  numeroComentarios: number;
}
