import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export enum EstadoInscripcion {
  PENDIENTE = 'pendiente',
  CONFIRMADA = 'confirmada',
  CANCELADA = 'cancelada',
}

export enum TipoInscripcion {
  CURSO_CORTO = 'Curso Corto',
  SEMILLERO = 'Semillero',
  SENNOVA = 'SENNOVA',
  TECNOLOGO = 'Tecnologo',
}

export class InscripcionEventoDto {
  
  @IsString()
  @IsNotEmpty()
  eventoId: string; //Tipo IEvente (modulo evento)

  @IsEnum(EstadoInscripcion)
  @IsNotEmpty()
  estado: string;

  @IsEnum(TipoInscripcion)
  @IsNotEmpty()
  tipoinscripcion: string;

  /*@IsDate()
  @IsNotEmpty()
  fechaInscripcion: Date;*/
}
