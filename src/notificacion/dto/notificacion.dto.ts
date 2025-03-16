import { IsUUID, IsNotEmpty, IsDate, IsString, IsEnum } from 'class-validator';

export enum TipoNotificacion {
  NUEVA_PUBLICACION = 'nueva publicación',
  EMPLEO = 'empleo',
  MENSAJE = 'mensaje',
  OTROS = 'otros',
}

export class NotificacionDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @IsEnum(TipoNotificacion)
  @IsNotEmpty()
  tipo: TipoNotificacion;

  @IsDate()
  @IsNotEmpty()
  fecha: Date;
}