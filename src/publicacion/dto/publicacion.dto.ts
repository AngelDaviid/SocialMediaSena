import { IsString, IsNotEmpty, IsEnum, IsNumber } from 'class-validator';
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
