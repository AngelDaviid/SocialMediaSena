import { IsUUID, IsString, IsNotEmpty, IsDate } from 'class-validator';
import { UserDocument } from 'src/users/schema/user.schema';

export class CrearMensajeDto {

  @IsString()
  @IsNotEmpty()
  idUser: UserDocument;

  @IsString()
  @IsNotEmpty()
  destinatarioId: UserDocument;

  @IsString()
  @IsNotEmpty()
  contenido: string;

  /*@IsDate()
  @IsNotEmpty()
  fechaEnvio: Date;*/
}
