import { IsUUID, IsString, IsNotEmpty, IsDate, IsEnum } from 'class-validator';

export enum EstadoPostulacion {
  PENDIENTE = 'pendiente',
  APROBADO = 'aprobado',
  RECHAZADO = 'rechazado',
}

export class PostulacionDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  ofertaEmpleoId: string;

  @IsString()
  @IsNotEmpty()
  cvAdjunto: string;

  @IsString()
  @IsNotEmpty()
  mensajePresentacion: string;

  @IsDate()
  @IsNotEmpty()
  fechaPostulacion: Date;

  @IsEnum(EstadoPostulacion)
  @IsNotEmpty()
  estado: EstadoPostulacion;
}
