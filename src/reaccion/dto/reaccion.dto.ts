import { IsUUID, IsString, IsNotEmpty, IsEnum } from 'class-validator';

export enum TipoReaccion {
  ME_GUSTA = 'Me gusta',
  INTERESANTE = 'Interesante',
  UTIL = 'Útil',
}

export class ReaccionDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  publicacionOComentarioId: string;

  @IsEnum(TipoReaccion)
  @IsNotEmpty()
  tipoReaccion: TipoReaccion;
}