import { IsString, IsNotEmpty, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDocument } from 'src/users/schema/user.schema';

export enum CategoriaPublicacion {
  PREGUNTAS = 'preguntas',
  RECURSOS = 'recursos',
  EXPERIENCIAS = 'experiencias',
  OTROS = 'otros',
}

export class CrearPublicacionDto {
  
  @IsNotEmpty()
  id: UserDocument;
  
  @IsString()
  @IsNotEmpty()
  contenido: string;

  @IsEnum(CategoriaPublicacion)
  @IsNotEmpty()
  categoria: CategoriaPublicacion;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  numeroReacciones: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  numeroComentarios: number;

  @IsString()
  @IsOptional()
  archivo?: string;
}
