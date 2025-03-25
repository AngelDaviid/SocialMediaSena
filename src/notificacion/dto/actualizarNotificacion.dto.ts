import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
export enum TipoNotificacion {
  NUEVA_PUBLICACION = 'nueva publicación',
  EMPLEO = 'empleo',
  MENSAJE = 'mensaje',
  OTROS = 'otros',
}

export class ActualizarNotificacionDto {

  @IsString()
  @IsNotEmpty()
  mensaje?: string;

  @IsEnum(TipoNotificacion)
  @IsNotEmpty()
  tipo?: TipoNotificacion;
}