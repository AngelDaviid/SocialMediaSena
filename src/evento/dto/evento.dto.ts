import { IsUUID, IsString, IsNotEmpty, IsDate, IsEnum, IsNumber } from 'class-validator';

export enum CategoriaEvento {
  CHARLA = 'charla',
  HACKATON = 'hackatón',
  TALLER = 'taller',
  OTROS = 'otros',
}

export class EventoDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsEnum(CategoriaEvento)
  @IsNotEmpty()
  categoria: CategoriaEvento;

  @IsDate()
  @IsNotEmpty()
  fechaHora: Date;

  @IsString()
  @IsNotEmpty()
  lugar: string;

  @IsNumber()
  @IsNotEmpty()
  inscritos: number;
}
