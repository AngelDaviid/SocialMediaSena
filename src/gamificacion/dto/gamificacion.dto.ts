import { IsNotEmpty, IsEnum, IsString } from 'class-validator';

export enum TipoLogro {
  PARTICIPACION = 'participación',
  CONTRIBUCION = 'contribución',
  LOGRO_DESTACADO = 'logro destacado',
  OTROS = 'otros',
}

export class GamificacionDto {
  
  @IsEnum(TipoLogro)
  @IsNotEmpty()
  tipoLogro: TipoLogro;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  idUsuario: string;

  /*@IsDate()
  @IsNotEmpty()
  fechaObtencion: Date;*/
}
