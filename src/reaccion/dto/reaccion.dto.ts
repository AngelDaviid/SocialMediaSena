import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export enum TipoReaccion {
  ME_GUSTA = 'Me gusta',
  INTERESANTE = 'Interesante',
  UTIL = 'Util',
}

export class ReaccionDto {
  @IsString()
  @IsNotEmpty()
  publicacionOComentarioId?: string; //IPublicacion (Modulo publicacion)

  @IsEnum(TipoReaccion)
  @IsNotEmpty()
  tipoReaccion?: TipoReaccion;
}