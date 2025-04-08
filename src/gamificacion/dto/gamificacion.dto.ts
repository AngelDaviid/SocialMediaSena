
import { IsNotEmpty, IsEnum, IsString } from 'class-validator';
import { UserDocument } from 'src/users/schema/user.schema';

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
  
  @IsNotEmpty()
  idUsuario: UserDocument;

  /*@IsDate()
  @IsNotEmpty()
  fechaObtencion: Date;*/

}
