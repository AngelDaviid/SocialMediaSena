import { IsString, IsNotEmpty, IsDate, IsEnum } from 'class-validator';

export enum EstadoPostulacion {
    PENDIENTE = 'pendiente',
    APROBADO = 'aprobado',
    RECHAZADO = 'rechazado',
  }

export class ActualizarPostulacionDto {

  @IsString()
  @IsNotEmpty()
  cvAdjunto?: string;

  @IsString()
  @IsNotEmpty()
  mensajePresentacion?: string;

  @IsEnum(EstadoPostulacion)
  @IsNotEmpty()
  estado?: EstadoPostulacion;
}
