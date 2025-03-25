import { IsString, IsNotEmpty, IsEnum, IsNumber } from 'class-validator';

export enum CategoriaEvento {
  CHARLA = 'charla',
  HACKATON = 'hackatón',
  TALLER = 'taller',
  OTROS = 'otros',
}

export class ActualizarEventoDto {

  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  descripcion?: string;

  @IsEnum(CategoriaEvento)
  @IsNotEmpty()
  categoria?: CategoriaEvento;

  @IsString()
  @IsNotEmpty()
  fechaHora?: string;

  @IsString()
  @IsNotEmpty()
  lugar?: string;

  @IsNumber()
  @IsNotEmpty()
  inscritos?: number;
}
