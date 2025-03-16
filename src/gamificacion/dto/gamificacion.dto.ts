import { IsUUID, IsNotEmpty,  IsEnum } from 'class-validator';

export enum TipoLogro {
  PARTICIPACION = 'participación',
  CONTRIBUCION = 'contribución',
  LOGRO_DESTACADO = 'logro destacado',
  OTROS = 'otros',
}

export class GamificacionDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsEnum(TipoLogro)
  @IsNotEmpty()
  tipoLogro: TipoLogro;

}
