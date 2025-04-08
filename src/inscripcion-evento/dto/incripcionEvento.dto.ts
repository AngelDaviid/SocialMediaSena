import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Evento } from 'src/evento/schema/evento.schema';
import { UserDocument } from 'src/users/schema/user.schema';

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

  @IsNotEmpty()
  iduser:UserDocument;

  @IsNotEmpty()
  eventoId: Evento; //Tipo IEvente (modulo evento)

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
